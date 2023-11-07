import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to Cloudflare</h1>
          <p>Supercharge your website with Cloudflare's services.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature">
            <i className="fas fa-shield"></i>
            <h3>Security</h3>
            <p>Protect your website from threats.</p>
          </div>
          <div className="feature">
            <i className="fas fa-bolt"></i>
            <h3>Performance</h3>
            <p>Improve your website's speed.</p>
          </div>
          {/* Add more feature sections as needed */}
        </div>
      </section>
    </div>
  );
};

export default Home;
