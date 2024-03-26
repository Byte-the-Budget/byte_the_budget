import React, { useState } from 'react';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would usually send the email and password to the server to create a new account
    console.log('Signup submitted', { email, password });
    };

    return (
    <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div>
        <label>Email:</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        </div>
        <div>
        <label>Password:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </div>
        <button type="submit">Signup</button>
    </form>
    );
}

export default Signup;
