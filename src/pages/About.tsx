import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>About Empire Estates</h1>
        
        <section className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2018, Empire Estates has been at the forefront of luxury real estate,
              connecting discerning clients with extraordinary properties. Our commitment to
              excellence and personalized service has made us a trusted name in premium real estate.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              To provide unparalleled service in the luxury real estate market, ensuring that
              every client finds their perfect property while experiencing the highest level
              of professionalism and expertise.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
              <li>Over a decade of experience in luxury real estate</li>
              <li>Exclusive access to premium properties</li>
              <li>Personalized service tailored to your needs</li>
              <li>Expert market knowledge and insights</li>
              <li>Professional network of trusted partners</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
