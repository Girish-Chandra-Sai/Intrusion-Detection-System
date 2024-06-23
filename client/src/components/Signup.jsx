import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../services/auService.js';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      console.log("hi");
      window.location.href = 'http://localhost:5173';
    } catch (err) {
      alert('Error registering user');
    }
  };

  return (
    <div className='s'>
      <h2>Sign Up</h2>
      <div className='signup'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            placeholder="UserName"
          />
        </div>
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
        <button type="submit">Sign Up</button>
      </form>
      </div>
      <p>
        Already registered? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Signup;
