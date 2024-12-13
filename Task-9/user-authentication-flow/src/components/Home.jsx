/* eslint-disable no-unused-vars */
// components/Home.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ title, description }) => {
  return (
    <div className="home">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};

// Define PropTypes
Home.propTypes = {
  title: PropTypes.string.isRequired,    // 'title' should be a string and is required
  description: PropTypes.string,         // 'description' should be a string, but it's optional
};

// Default Props (optional)
Home.defaultProps = {
  description: 'Welcome to our website!', // Provide a default description if not passed
};

export default Home;


