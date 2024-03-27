import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

const Nav = () => {
    const { isLoggedIn, logout } = useAuth();

    return (
        <nav>
            <ul>
                {/* Home link visible to all users */}
                <li><Link to="/">Home</Link></li>

                {isLoggedIn ? (
                    <>
                        {/* Dashboard and other links for logged-in users */}
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/user-profile">User Profile</Link></li>
                        <li><Link to="/goals">Goals</Link></li>
                        <li><Link to="/financial-planning">Financial Planning</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                        <li><button onClick={logout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        {/* Login and Signup links for guests */}
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Nav;