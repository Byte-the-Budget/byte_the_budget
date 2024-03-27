import React, { useEffect, useCallback, useState } from "react";
import { usePlaidLink } from "react-plaid-link";

const PlaidLink = () => {
  const [token, setToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const createLinkToken = async () => {
      const response = await fetch(`/api/create_link_token`, { method: "GET" });
      const { link_token } = await response.json();
      console.log("link_token", link_token);
      setToken(link_token);
    };
    createLinkToken();
  }, []);

  const onSuccess = useCallback((publicToken, metadata) => {
    // send public_token to your server
    // https://plaid.com/docs/api/tokens/#token-exchange-flow
    fetch(`/api/exchange_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ publicToken }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Access token:", data.access_token);
        setAccessToken(data.access_token);
      });
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

  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    if (accessToken) {
      fetch(`/api/transactions?access_token=${accessToken}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Transactions:", data.transactions);
          setTransactions(data.transactions);
        })
        .catch((error) => {
          console.error("Error fetching transactions:", error);
        });
    }
  }, [accessToken]);

  return (
    <div>
      <button onClick={() => open()} disabled={!ready}>
        Connect with Plaid
      </button>
      <div>
        <h2>Transactions</h2>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.name}: ${transaction.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlaidLink;
