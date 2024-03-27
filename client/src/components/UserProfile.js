import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '' 
    });
    const [linkedAccounts, setLinkedAccounts] = useState([]);

    useEffect(() => {
        // Placeholder for fetching user data and linked accounts
        // setUser(...) and setLinkedAccounts(...) with actual data
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for submitting updated user data
    };

    return (
        <div>
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>

            <h3>Linked Accounts</h3>
            <ul>
                {linkedAccounts.map((account, index) => (
                    <li key={index}>{account}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserProfile;
