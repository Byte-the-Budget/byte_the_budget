import React from 'react';
import { Link } from 'react-router-dom'
import SideBar from './Sidebar';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="content-wrapper">
      {/* Navbar Placeholder */}
      <nav className="nav-bar-placeholder d-flex align-items-center justify-content-between" style={{ width: '100%'}}>
        <Link className="navbar-brand" to="/#">LOGO here</Link>
        <div>Right</div>
      </nav>

      <div className="layout">
        <SideBar />

        <main className="main">
          <div className="grid-container">
            <div className="grid-item expense-budget"></div>
            <div className="grid-item expense-category"></div>
            <div className="grid-item calendar"></div>
            <div className="grid-item goals"></div>
            <div className="grid-item transactions"></div>
            <div className="grid-item expense-budget-monthly"></div>
          </div>
        </main>
        
      </div>
    </div>
  );
}

export default Dashboard;