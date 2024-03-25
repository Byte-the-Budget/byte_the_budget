import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    // Normally, you'd send the email and password to the server here
    console.log('Login submitted', { email, password });
    };

    return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
    </form>
    );
}

export default Login;


