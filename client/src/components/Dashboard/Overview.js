import React from 'react';
import './dashboard.css';
import HalfDonutChart from './Charts/HalfDonutChart'
import DonutChart from './Charts/DonutChart'
import BarChart from './Charts/BarChart';
import TransactionHistory from './TransactionHistory';

import { 
  categories, 
  expensesByCategory, 
  transactions, 
  last6MonthsBudget, 
  last6MonthsExpense, 
  last6Months,
  currentBudget,
  currentExpense
} from './data/data';

import { Chart as defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function Overview() {
  return (
    <div className="grid-container">
      <div className="grid-item expense-budget">
        <h6 className="item-title">Your March expense so far</h6>
        <div style={{height: 'calc(100% - 50px)', width: '100%', display: 'flex', justifyContent: 'center'}}>
          <HalfDonutChart budget={currentBudget} expense={currentExpense}/>
        </div>
        <div className='d-flex justify-content-between'>
          <span style={{fontSize: '14px'}}>${currentBudget}.00</span>
          <span style={{fontSize: '14px'}}>${currentExpense}.00</span>
        </div>
      </div>

      <div className="grid-item expense-category">
        <h6 className="item-title">Your major expense categories</h6>
        <div style={{height: 'calc(100% - 25px)', width: '100%'}}>
          <DonutChart categories={categories} expenses={expensesByCategory}/>
        </div>
      </div>
      
      <div className="grid-item transactions">
        <h6 className="item-title">Transaction History</h6>
        <TransactionHistory transactions={transactions}/>
      </div>
      <div className="grid-item expense-budget-monthly">
        <h6 className="item-title">Your last 6 months budget and expense</h6>

        <BarChart months={last6Months} budget={last6MonthsBudget} expense={last6MonthsExpense}/>
      </div>
    </div>
  );
}

export default Overview;