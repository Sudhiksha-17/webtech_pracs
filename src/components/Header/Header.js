import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Your Logo</Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </nav>
        <div className="account">
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
