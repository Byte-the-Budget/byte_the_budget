#!/usr/bin/env python3

# Standard library imports

# Remote library imports
import os
from flask import request, jsonify
from flask_restful import Resource

import plaid 
from plaid.api import plaid_api
from plaid.model.link_token_create_request import LinkTokenCreateRequest
from plaid.model.link_token_create_request_user import LinkTokenCreateRequestUser
from plaid.model.products import Products
from plaid.model.country_code import CountryCode

from plaid.model.item_public_token_exchange_request import ItemPublicTokenExchangeRequest

# Local imports
from config import app, db, api

FRONTEND_URL = os.getenv('FRONTEND_URL')
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

# Views go here!
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
        # redirect_uri=FRONTEND_URL 
    )
    
    response = client.link_token_create(request)
    link_token = response['link_token']
    return jsonify({'link_token': response['link_token']})

@app.route('/api/exchange_token', methods=['POST'])
def exchange_public_token():
    public_token = request.json['public_token']
    exchange_request = ItemPublicTokenExchangeRequest(
        public_token
    )
    access_token = exchange_response['access_token']
    return jsonify(exchange_response)


if __name__ == '__main__':
    app.run(port=5555, debug=True)
