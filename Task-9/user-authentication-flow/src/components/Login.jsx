/* eslint-disable no-unused-vars */
// components/Login.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../context/context'; // assuming you are using the context for authentication

const Login = ({ onLoginSuccess }) => {
  const { dispatch } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form input changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (you can enhance it further)
    if (!email || !password) {
      setError('Email and Password are required');
      return;
    }

    // Simulate login logic (this can be replaced with an API call)
    const user = { email, name: email.split('@')[0] }; // Just an example, get user info based on email
    dispatch({ type: 'LOGIN', payload: user });

    // Clear error if successful
    setError('');
    onLoginSuccess(user); // Notify parent component of success (e.g., redirect)
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// PropType validation
Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired, // onLoginSuccess should be a function
};

export default Login;


