import React from 'react';

const TransactionHistory = ({transactions}) => {
  const transactionsList = transactions.map((transaction, index) => {
    return (
      <div key={index} className='transaction-card'>
        <span className='transaction-category'>{transaction.category}</span>
        <span className='transaction-amount'>${transaction.amount}</span>
      </div>
    )
  })

  return (
    <div className=''>
      {transactionsList}
    </div>
  )
};

export default TransactionHistory;