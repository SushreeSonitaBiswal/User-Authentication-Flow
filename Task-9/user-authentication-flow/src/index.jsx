/* eslint-disable no-unused-vars */
// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import 'createRoot' from 'react-dom/client'
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Create a root for React 18 and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root

root.render(
  <Router>
    <App />
  </Router>
);

