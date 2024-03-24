import React from 'react';
import './dashboard.css';

function Overview() {
  return (
    <div className="grid-container">
      <div className="grid-item expense-budget"></div>
      <div className="grid-item expense-category"></div>
      <div className="grid-item calendar"></div>
      <div className="grid-item goals"></div>
      <div className="grid-item transactions"></div>
      <div className="grid-item expense-budget-monthly"></div>
    </div>
  );
}

export default Overview;