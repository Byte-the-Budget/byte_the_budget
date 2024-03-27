import React from 'react';
import { NavLink } from 'react-router-dom'
import { ReactComponent as DashboardIcon } from '../../assets/icon-dashboard.svg';
import { ReactComponent as PlanIcon } from '../../assets/icon-plan.svg';
import { ReactComponent as TransactionsIcon } from '../../assets/icon-transactions.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icon-settings.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icon-logout.svg';
import './sidebar.css';

function SideBar() {
  function getNavLinkClass(isActive){
    return `d-flex align-items-center text-decoration-none ${isActive ? 'active-link' : 'inactive-link'}`;
  }

  return (
    <div className="side-bar">
      <div className="d-flex flex-column justify-content-between" style={{height: '100%'}}>
        <ul className="nav flex-column">
          <NavLink to="/dashboard" end className={({ isActive }) => getNavLinkClass(isActive)} style={{ marginBottom: '12px' }}>
            <DashboardIcon style={{ marginRight: '8px' }}/>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/dashboard/plan" className={({ isActive }) => getNavLinkClass(isActive)} style={{ marginBottom: '12px' }}>
            <PlanIcon style={{ marginRight: '8px' }}/>
            <span>Plan</span>
          </NavLink>
          <NavLink to="/dashboard/transactions" className={({ isActive }) => getNavLinkClass(isActive)} style={{ marginBottom: '12px' }}>
            <TransactionsIcon style={{ marginRight: '8px' }}/>
            <span>Transactions</span>
          </NavLink>
        </ul>

        <ul className="nav flex-column">
          <NavLink to="/dashboard/settings" className={({ isActive }) => getNavLinkClass(isActive)} style={{ marginBottom: '12px' }}>
            <SettingsIcon style={{ marginRight: '8px' }}/>
            <span>Settings</span>
          </NavLink>
          <div style={{ marginBottom: '12px' }}>
            <LogoutIcon style={{ marginRight: '8px' }}/>
            <span>Logout</span>
          </div>
        </ul>
      </div>
    </div>  
  );
}

export default SideBar;