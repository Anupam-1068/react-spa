import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming any username and password combination is valid for now.
    if (username && password) {
      // Redirect to the main page after a successful login
      navigate('/');
    } else {
      // You can show an error message here if needed
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Fitness Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">
              <span className="icon">👤</span>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username state
              />
            </label>
          </div>

          <div className="input-container">
            <label htmlFor="password">
              <span className="icon">🔒</span>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
            </label>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Stay Signed In
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
