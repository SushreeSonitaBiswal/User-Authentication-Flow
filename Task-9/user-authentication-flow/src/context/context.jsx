/* eslint-disable no-unused-vars */
// context/context.jsx
import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Initial state for authentication
const initialState = {
  user: null,          // User object (null if not authenticated)
  isAuthenticated: false, // Whether the user is logged in
};

// Define the action types
const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

// Create a reducer function to manage authentication state
const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,   // Set the user data from the payload
        isAuthenticated: true,  // Set the user as authenticated
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,             // Remove user data
        isAuthenticated: false, // Set the user as unauthenticated
      };
    default:
      return state;
  }
};

// Create the context
const AuthContext = createContext();

// Custom hook to use the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component to wrap the app and provide authentication state
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// PropTypes validation for AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Children should be valid React nodes
};

export { AuthProvider, actionTypes };
