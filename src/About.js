import React from 'react';
// this is about us page and this page help to get an idea about our cafe to users

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="/images/cafe-interior.jpg"
            alt="Cafe Interior"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <p>
            Welcome to <strong>Café Bliss</strong>, your cozy retreat for coffee, snacks, and
            meaningful conversations. Located in the heart of the city, we offer the finest
            blends of coffee and freshly baked goods.
          </p>
          <p>
            Our mission is to create a space where people can relax, connect, and savor the
            simple joys of life.
          </p>
          <p>Thank you for making us a part of your day. We look forward to serving you!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
