import { useState } from 'react';
import './css/navbar.css';
import './css/navbar-mobile.css';
import PDEMLogo from './assets/PDEM Logo.jpg';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      {/* Group 1: Logo */}
      <div className='brand-logo'>
        <a href="/">
          <img src={PDEMLogo} alt="PDEM Logo" width={150} />
        </a>
      </div>

      {/* Hamburger Button (Mobile only) */}
      <div className={`hamburger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
           <div className="bar"></div>
        
      </div>

      {/* Group 2 & 3: Navigation Menu */}
      <div className={`nav-menu ${isOpen ? "is-active" : ""}`}>
        
        {/* Center Links */}
        <ul className='nav-links-center'>
          <li><a href="#about">About</a></li>
          <li 
            onMouseEnter={() => setActiveMenu('courses')} 
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a href="#courses">Courses Offered ▾</a>
            {activeMenu === 'courses' && (
              <ul className='dropdown-menu'>
                <li><a href="">Piano Lesson</a></li>
                <li><a href="">Voice Lesson</a></li>
                <li><a href="">Guitar Lesson</a></li>
                <li><a href="">Drum Lesson</a></li>
              </ul>
            )}
          </li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>

        {/* Right Links */}
        <ul className='nav-links-right'>
          <li 
            onMouseEnter={() => setActiveMenu('enroll')} 
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a href="#enroll">Enroll Now ▾</a>
            {activeMenu === 'enroll' && (
              <ul className='dropdown-menu'>
                <li><a href="">Manila Branch</a></li>
                <li><a href="">Online Branch</a></li>
              </ul>
            )}
          </li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;