/* eslint-disable no-unused-vars */
// components/Contact.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ message }) => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>{message}</p>
    </div>
  );
};

// Prop type validation
Contact.propTypes = {
  message: PropTypes.string.isRequired, // message should be a string and required
};

export default Contact;



