/* eslint-disable no-unused-vars */
// components/Dashboard.jsx
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../context/context';

const Dashboard = ({ user }) => {
  const { state, dispatch } = useAuth();

  // Handle Logout
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    // If the user is logged in, you can use the user data from the context or prop.
    console.log('User data:', user);
  }, [user]);

  // Get user data from context if it's available, else fallback to prop.
  const userName = user ? user.name : (state?.user?.name || 'User');
  
  return (
    <div className="dashboard">
      <h1>Welcome to your Dashboard, {userName}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

// Prop type validation
Dashboard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }), // 'user' should be an object with 'name' and 'email'
};

export default Dashboard;


