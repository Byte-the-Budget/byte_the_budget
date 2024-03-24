import React from 'react';
import './dashboard.css';
import HalfDonutChart from './Charts/HalfDonutChart'
import DonutChart from './Charts/DonutChart'
import BarChart from './Charts/BarChart';

import { Chart as defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function Overview() {
  return (
    <div className="grid-container">
      <div className="grid-item expense-budget">
        <h6 className="item-title">Your March expense so far</h6>
        <div><HalfDonutChart /></div>
      </div>

      <div className="grid-item expense-category">
        <h6 className="item-title">Your major expense categories</h6>
        <div><DonutChart /></div>
      </div>
      <div className="grid-item calendar">
        <DonutChart />
      </div>
      <div className="grid-item goals">
        <DonutChart />
      </div>
      <div className="grid-item transactions">
        <h6 className="item-title">Recent Transactions</h6>
        <DonutChart />
      </div>
      <div className="grid-item expense-budget-monthly">
        <BarChart />
      </div>
    </div>
  );
}

export default Overview;