import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import StackedBarChart from './Charts/StackedBarChart'
import "./Plan.css";

import { 
  budgets
} from './data/data';

const Plan = () => {
  const budgetCards = budgets.map(budget => {
    return (
      <div style={{height: '50px', marginBottom: '16px'}}>
        <span style={{fontSize: '12px'}}>{budget.category}</span>
        <div style={{height: '40px'}}>
          <StackedBarChart data={budget} />
        </div>
       
      </div>
    )
  })
  return (
    <div className="plan-container">
      <div className="plan-card">
        <h5>Your Budget</h5>
        {budgetCards}
        {/* <StackedBarChart data={budgets}/> */}
      </div>
      <div className="plan-card">
        <h5>Your Goals</h5>
      </div>
    </div>
  );
};

export default Plan;
