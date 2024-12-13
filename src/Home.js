import React from 'react';
import { Link } from 'react-router-dom';
//This is a home page(main page)

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section d-flex align-items-center justify-content-center"
        style={{
          height: '100vh',
          backgroundImage: "url('/images/cafe-hero.jpg')",
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
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div
          className="text-center"
          style={{
            zIndex: 2,
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
          }}
        >
          <h1 className="display-4">Welcome to Café Bliss</h1>
          <p className="lead">A place where coffee meets comfort</p>
          <Link to="/menu" className="btn btn-primary btn-lg mt-3">
            Explore Our Menu
          </Link>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container text-center py-5">
        <h2>About Café Bliss</h2>
        <p className="mt-3">
          At Café Bliss, we believe in serving happiness one cup at a time. Whether you're looking
          for a quiet spot to relax or a warm space to connect, we’ve got you covered. Explore our
          freshly brewed coffee, artisan pastries, and a cozy ambiance.
        </p>
        <Link to="/about" className="btn btn-secondary mt-3">
          Learn More About Us
        </Link>
      </div>

      {/* Call to Action */}
      <div className="container-fluid text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <h2>Visit Us Today</h2>
        <p className="mt-3">
          Step into Café Bliss and experience the joy of freshly brewed coffee, delicious food, and
          friendly faces. We're excited to serve you!
        </p>
        <Link to="/contact" className="btn btn-dark mt-3">
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Home;
