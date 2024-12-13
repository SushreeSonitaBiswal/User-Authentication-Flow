/* eslint-disable no-unused-vars */
// App.jsx
import React, { useState, useEffect } from 'react';
import { useAuth, actionTypes } from './context/context';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Contact from './components/Contact';
import Register from './components/Register';
// import Services from './components/Services';
import './App.css';

const App = () => {
  const { state, dispatch } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check localStorage for an existing user session when the app loads
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      dispatch({ type: actionTypes.LOGIN, payload: savedUser });
      setUser(savedUser); // Update the local state with the saved user
    }
  }, [dispatch]);

  const handleLoginSuccess = (user) => {
    // Set user in state and localStorage, then dispatch login action
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user)); // Save user to localStorage
    dispatch({ type: actionTypes.LOGIN, payload: user }); // Dispatch login action
  };

  const handleLogout = () => {
    // Clear user data and logout the user
    setUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage
    dispatch({ type: actionTypes.LOGOUT }); // Dispatch logout action
  };

  return (
    <div className="app">
      {state.isAuthenticated ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;


