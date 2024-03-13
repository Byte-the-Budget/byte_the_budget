import React, { useEffect, useCallback, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const PlaidLink = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const createLinkToken = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/create_link_token`, { method: 'GET' });
      const { link_token } = await response.json();
      console.log('link_token', link_token)
      setToken(link_token);
    };
    createLinkToken()
  }, [])

  const onSuccess = useCallback((publicToken, metadata) => {
    // send public_token to your server
    // https://plaid.com/docs/api/tokens/#token-exchange-flow
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/exchange_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ publicToken }),
    })
    .then(response => response.json()) 
    .then(data => {
      console.log('Access token:', data.accessToken);
    })
  }, []);

  const onEvent = useCallback((eventName, metadata) => {
    // log onEvent callbacks from Link
    // https://plaid.com/docs/link/web/#onevent
    console.log(eventName, metadata);
  }, []);
  const onExit = useCallback((error, metadata) => {
    // log onExit callbacks from Link, handle errors
    // https://plaid.com/docs/link/web/#onexit
    console.log(error, metadata);
  }, []);

  const config = {
    token,
    onSuccess,
    onEvent,
    onExit,
  };

  const {
    open,
    ready
  } = usePlaidLink(config);
  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect with Plaid
    </button>
  );
};

export default PlaidLink;