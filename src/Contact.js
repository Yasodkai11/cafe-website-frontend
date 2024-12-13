import React from 'react';
//this is a contact page , our user can contact us through the details

const Contact = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        height: '100vh',
        backgroundImage: "url('/images/contact-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      ></div>

      {/* Contact Details */}
      <div
        className="text-center p-5"
        style={{
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          color: '#333',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h1>Contact Us</h1>
        <p>
          <strong>Email:</strong> cafe.bliss@example.com
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Address:</strong> 123 Main Street, Coffee City
        </p>
      </div>
    </div>
  );
};

export default Contact;
