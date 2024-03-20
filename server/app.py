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
from plaid.model.auth_get_request import AuthGetRequest
from config import app, db, api
from flask_sqlalchemy import SQLAlchemy
from plaid.model.identity_get_request import IdentityGetRequest 
from models import User  
from bcrypt import hashpw, gensalt
from sqlalchemy.exc import IntegrityError
from flask_bcrypt import Bcrypt



bcrypt = Bcrypt(app)



with app.app_context():
    db.create_all()


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

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if User.query.filter_by(username=username).first():
        return jsonify({'error': 'Username already exists'}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(username=username, password=hashed_password)
    db.session.add(new_user)
    try:
        db.session.commit()
        return jsonify({'message': 'User created successfully'}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': 'Username already exists'}), 400

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and bcrypt.check_password_hash(user.password, password):
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401

        
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

       
        start_date_str = '2000-01-01'  
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

@app.route('/api/auth/get', methods=['GET'])
def get_auth_data():
    try:
        access_token = request.args.get('access_token')

        auth_request = AuthGetRequest(access_token=access_token)
        auth_response = client.auth_get(auth_request)

        accounts = auth_response.accounts
        numbers = auth_response.numbers
        

        account_details = []
        for account in accounts:
            account_info = {
                'account_id': account.account_id,
                'name': account.name,
                'type': account.type,
                'subtype': account.subtype,
            }
            account_details.append(account_info)

        
        return jsonify({'accounts': account_details, 'numbers': numbers})
    except ApiException as e:
        return jsonify({'error': f'Failed to fetch auth data: {e}'}), 500


@app.route('/api/identity/get', methods=['GET'])
def get_identity_data():
    try:
        access_token = request.args.get('access_token')

        identity_request = IdentityGetRequest(access_token=access_token)
        identity_response = client.identity_get(identity_request)

        accounts = identity_response.accounts

        identity_details = []

        for account in accounts:
            account_id = account.account_id
            account_name = account.name

            account_identities = account.owners[0]  
            
            addresses = []
            for address in account_identities.addresses:
                address_dict = address.to_dict()
                addresses.append(address_dict)
            
     
            emails = [email.data['email'] if isinstance(email.data, dict) else email.data for email in account_identities.emails]
            

            phone_numbers = [str(phone_number) for phone_number in account_identities.phone_numbers]

            identity_info = {
                'account_id': account_id,
                'account_name': account_name,
                'identities': {
                    'addresses': addresses,
                    'emails': emails,  
                    'names': account_identities.names,
                    'phone_numbers': phone_numbers 
                }
            }

            identity_details.append(identity_info)

        return jsonify({'identities': identity_details}), 200
    except ApiException as e:
        return jsonify({'error': f'Failed to fetch identity data: {e}'}), 500


    
if __name__ == '__main__':
    app.run(port=5555, debug=True)
