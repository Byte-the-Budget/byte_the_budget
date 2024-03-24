import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import SideBar from '../Sidebar';

import './dashboard.css';

function Dashboard() {
  return (
    <div className="content-wrapper">
      {/* Navbar Placeholder */}
      <nav className="nav-bar-placeholder d-flex align-items-center justify-content-between" style={{ width: '100%'}}>
        <Link className="navbar-brand" to="/dashboard">LOGO here</Link>
        <div>Right</div>
      </nav>

      <div className="layout">
        <SideBar />

        <main className="main">
          <Outlet />
        </main>
        
      </div>
    </div>
  );
}

export default Dashboard;