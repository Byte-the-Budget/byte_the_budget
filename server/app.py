#!/usr/bin/env python3

# Standard library imports
import os
import requests
from flask import request, jsonify
from flask_restful import Resource
from datetime import datetime, date
import plaid 
from plaid.api import plaid_api
from plaid.exceptions import ApiException
from plaid.model.link_token_create_request import LinkTokenCreateRequest
from plaid.model.link_token_create_request_user import LinkTokenCreateRequestUser
from plaid.model.products import Products
from plaid.model.country_code import CountryCode
from plaid.model.item_public_token_exchange_request import ItemPublicTokenExchangeRequest
from plaid.model.transactions_get_request import TransactionsGetRequest
from config import app, db, api

FRONTEND_URL = os.getenv('FRONTEND_URL')
REACT_APP_BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')
PLAID_SECRET = os.getenv('PLAID_SECRET')
PLAID_CLIENT_ID = os.getenv('PLAID_CLIENT_ID')
PLAID_ENV = os.getenv('PLAID_ENV', 'sandbox')

host = plaid.Environment.Sandbox

if PLAID_ENV == 'sandbox':
    host = plaid.Environment.Sandbox

if PLAID_ENV == 'development':
    host = plaid.Environment.Development

if PLAID_ENV == 'production':
    host = plaid.Environment.Production

configuration = plaid.Configuration(
    host=host,
    api_key={
        'clientId': PLAID_CLIENT_ID,
        'secret': PLAID_SECRET,
        'plaidVersion': '2020-09-14'
    }
)
api_client = plaid.ApiClient(configuration)
client = plaid_api.PlaidApi(api_client)

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

@app.route('/api/create_link_token', methods=['GET'])
def create_link_token():
    request = LinkTokenCreateRequest(
        user= LinkTokenCreateRequestUser(
            client_user_id='user-id2',
            phone_number='+1 415 5550123'
        ),
        client_name='Personal Finance App',
        products=[Products('transactions')],
        country_codes=[CountryCode('US')],
        language='en',
    )
    if REACT_APP_BACKEND_URL != None:
        request['redirect_uri'] = REACT_APP_BACKEND_URL

    response = client.link_token_create(request)
    link_token = response['link_token']
    return jsonify({'link_token': response['link_token']})

@app.route('/api/exchange_token', methods=['POST'])
def exchange_public_token():
    try:
        public_token = request.json['publicToken']
    except KeyError:
        return jsonify({'error': 'Missing publicToken in request payload'}), 400

    exchange_request = ItemPublicTokenExchangeRequest(
        public_token=public_token
    )
    
    try:
        exchange_response = client.item_public_token_exchange(exchange_request)

        access_token = exchange_response.access_token

        if access_token:
            return jsonify({'access_token': access_token})
        else:
            return jsonify({'error': 'Access token not found in response'}), 500
    except ApiException as e:
        return jsonify({'error': f'Failed to exchange public token: {e}'}), 500


from plaid.model.transactions_get_request import TransactionsGetRequest

@app.route('/api/transactions', methods=['GET'])
def get_transactions():
    try:
        access_token = request.args.get('access_token')

       
        start_date_str = '2023-01-01'  
        end_date_str = '2024-03-19'  

        start_date = datetime.strptime(start_date_str, '%Y-%m-%d').date()
        end_date = datetime.strptime(end_date_str, '%Y-%m-%d').date()

        transactions_request = TransactionsGetRequest(
            access_token=access_token,
            start_date=start_date,
            end_date=end_date
        )

        transactions_response = client.transactions_get(transactions_request)
        
        transactions = transactions_response.transactions
        
        transaction_details = []
        for transaction in transactions:
            transaction_info = {
                'date': transaction.date,
                'amount': transaction.amount,
                'name': transaction.name,
                'category': transaction.category,
                'location': {
                    'address': transaction.location.address,
                    'city': transaction.location.city,
                    'region': transaction.location.region,
                    'postal_code': transaction.location.postal_code,
                    'country': transaction.location.country,
                    'lat': transaction.location.lat,
                    'lon': transaction.location.lon
                }
            }
            transaction_details.append(transaction_info)

        return jsonify({'transactions': transaction_details})
    except ApiException as e:
        return jsonify({'error': f'Failed to fetch transactions: {e}'}), 500

    
if __name__ == '__main__':
    app.run(port=5555, debug=True)
