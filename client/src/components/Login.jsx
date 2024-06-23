import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services/auService.js';
import './Signup.css'; // Import the existing Signup.css for styling

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(formData);
            localStorage.setItem('token', data.token);
            window.location.href = 'http://localhost:5173';
        } catch (err) {
            alert('Error logging in user');
        }
    };

    return (
        <div className="s">
            <div className="signup">
                <h2>Login</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>
                    New user? <Link to="/signup">Sign Up here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
