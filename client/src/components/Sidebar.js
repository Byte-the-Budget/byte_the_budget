import React from 'react';
import { Link } from 'react-router-dom'
import './sidebar.css';

function SideBar() {
  return (
    <div className="side-bar">
      <div className="d-flex flex-column justify-content-between" style={{height: '100%'}}>
        <ul className="nav flex-column">
          <Link to="#">Dashboard</Link>
          <Link >Plan</Link>
          <Link >Transactions</Link>
        </ul>
        <ul className="nav flex-column">
          <Link to="#">Settings</Link>
          <div>Logout</div>
        </ul>
      </div>
    </div>  
  );
}

export default SideBar;