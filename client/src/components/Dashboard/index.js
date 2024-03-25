import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import SideBar from '../Sidebar';

import './dashboard.css';
import profileImage from '../../assets/profile.png'
import logo from '../../assets/logo.png'
function Dashboard() {
  return (
    <div className="content-wrapper">
      {/* Navbar Placeholder */}
      <nav className="nav-bar-placeholder d-flex align-items-center justify-content-between" style={{ width: '100%'}}>
        <Link className="navbar-brand" to="/dashboard">
          <div className="logo-container">
            <img src={logo}/>
          </div>
          <span>Byte the Budget</span>
        </Link>
        <div>
          <img src={profileImage}/>
          <span></span>
        </div>
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