import React, { useState } from 'react';
// You would also need to import your CSS file for styling
// import './Header.css'; 

const Header = ({ onLoginClick }) => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header" id="navbar">
      <div className="container header-inner">
        {/* Brand/Logo Section */}
        <div className="brand">
          <div className="logo-wrapper">
            {/* Note: You would place your image in the public directory or import it */}
            <img
              src="/assets/images/logo.png"
              alt="St. Xavier's Logo"
              className="logo-img"
            />
          </div>
          <div className="brand-text">
            <div className="brand-title">ST. XAVIER'S</div>
            <div className="brand-sub">INSTITUTE OF TECHNOLOGY</div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="nav-right">
          {/* Hamburger Menu Button */}
          <button
            className="hamburger-menu"
            id="hamburgerMenu"
            aria-label="Toggle navigation menu"
            onClick={toggleMenu} // Event handler to toggle state
          >
            {/* Note: If using Font Awesome in React, you might use an imported component */}
            <i className="fas fa-bars"></i>
          </button>

          {/* Navigation Links List */}
          <ul
            className={`nav-links ${isMenuOpen ? 'open' : ''}`} // Conditionally apply 'open' class
            id="navLinks"
          >
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button id="loginBtn" className="btn-login" onClick={onLoginClick}>Login</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;