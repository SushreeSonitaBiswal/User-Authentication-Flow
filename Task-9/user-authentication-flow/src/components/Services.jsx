/* eslint-disable no-unused-vars */
// components/Services.jsx
import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, description, onLearnMore }) => (
  <div className="service-card">
    <h2>{title}</h2>
    <p>{description}</p>
    <button onClick={onLearnMore}>Learn More</button>
  </div>
);

const Services = ({ services }) => {
  const handleLearnMore = (serviceTitle) => {
    // Handle what happens when a user clicks "Learn More"
    alert(`Learn more about: ${serviceTitle}`);
  };

  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            onLearnMore={() => handleLearnMore(service.title)}
          />
        ))}
      </div>
    </div>
  );
};

// Prop type validation for ServiceCard
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onLearnMore: PropTypes.func.isRequired,
};

// Prop type validation for Services
Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Services;



  