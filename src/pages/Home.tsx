import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to EMPIRE ESTATES</h1>
            <p className="hero-subtitle">
              Discover luxury properties in the most prestigious locations. 
              Where dreams meet reality in the world of premium real estate.
            </p>
            <div className="hero-buttons">
              <Link to="/properties" className="btn btn-primary">
                🏡 View Properties
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                📞 Contact Us
              </Link>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">500+</span>
              <span className="hero-stat-label">Properties Sold</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">95%</span>
              <span className="hero-stat-label">Client Satisfaction</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">15+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-header">
            <h2>Why Choose Empire Estates?</h2>
            <p className="features-subtitle">
              We provide exceptional service and expertise to help you find your perfect home
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🏙️</div>
              <h3>Premium Locations</h3>
              <p>
                Exclusive properties in the most desirable neighborhoods with 
                unparalleled access to amenities and stunning views.
              </p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">👨‍💼</div>
              <h3>Expert Service</h3>
              <p>
                Professional real estate agents with over 15 years of experience 
                providing personalized guidance throughout your journey.
              </p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">✨</div>
              <h3>Luxury Living</h3>
              <p>
                High-end amenities and exceptional quality in every property, 
                ensuring a lifestyle of comfort and sophistication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Dream Home?</h2>
            <p>
              Let our expert team guide you through the process of finding 
              the perfect luxury property that matches your lifestyle and preferences.
            </p>
            <div className="hero-buttons">
              <Link to="/properties" className="btn btn-primary">
                🔍 Browse Properties
              </Link>
              <Link to="/contact" className="btn btn-glass">
                💬 Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
