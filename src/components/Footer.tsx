import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Empire Estates</h3>
            <p>Your premier destination for luxury real estate. We specialize in high-end properties in the most exclusive locations.</p>
            <div className="footer-social">
             <a href="https://www.instagram.com/empire_estates_2019" className="social-link" aria-label="Instagram">📷</a>
              </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">🏠 Home</Link></li>
              <li><Link to="/properties">🏢 Properties</Link></li>
              <li><Link to="/about">ℹ️ About Us</Link></li>
              <li><Link to="/contact">📞 Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 empireestates2018@gmail.com</p>
            <p>📱 +91 9553307874</p>
            <p>📍 auto nagar. near vishnu township,PC 518003 ,KURNOOL,AP,</p>
            <p>🕒 Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
          </div>
          
          <div className="footer-section">
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for the latest luxury properties and market insights.</p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Empire Estates. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
