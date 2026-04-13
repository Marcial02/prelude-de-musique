import { useState } from 'react';
import { useEffect } from 'react';
import './css/navbar.css';
import './css/navbar-mobile.css';
import PDEMLogo from '/images/PDEM Logo.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Logic for mobile menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  return (
   <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
    <div className='nav-logo'>
    <Link to='/'>
      <img src={PDEMLogo} alt="prelude de musique logo picture" width={200} />
    </Link>
    </div>

    <div className={`hamburger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
           <div className="bar"></div>
      </div>

    <div className={`nav-div nav-menu ${isOpen ? "is-active" : ""} ${scrolled ? 'scrolled' : ''}`}> 
    <ul className=''>
      <li><a href="">About</a></li>
      <li
       onMouseEnter={() => setActiveMenu('courses')} 
            onMouseLeave={() => setActiveMenu(null)}>
              <a href="#courses">Courses Offered ▾</a>
         {activeMenu === 'courses' && (
              <ul className='dropdown-menu'>
                <li><a href="">Piano Lesson</a></li>
                <li><a href="">Voice Lesson</a></li>
                <li><a href="">Violin Lesson</a></li>
                <li><a href="">Viola Lesson</a></li>
                <li><a href="">Guitar Lesson</a></li>
                <li><a href="">Ukelele Lesson</a></li>
                <li><a href="">Flute Lesson</a></li>
                <li><a href="">Saxophone Lesson</a></li>
                <li><a href="">Recorder Lesson</a></li>
                <li><a href="">Drum Lesson</a></li>
                <li><a href="">Trumpet Lesson</a></li>
              </ul>
            )}
            </li>
      <li><a href="">Price</a></li>
      <li
       onMouseEnter={() => setActiveMenu('enroll')} 
            onMouseLeave={() => setActiveMenu(null)}>
              <a href="">Enroll Now ▾</a>
         {activeMenu === 'enroll' && (
              <ul className='dropdown-menu'>
                 <li><a href="">Kawit Branch</a></li>
                <li><a href="">Imus Branch</a></li>
                <li><a href="">Bacoor Branch</a></li>
                <li><a href="">Dasma Branch</a></li>
                <li><a href="">Home Service</a></li>
                <li><a href="">Online Lesson</a></li>
              </ul>
            )}
            </li>
      <li
       onMouseEnter={() => setActiveMenu('more')} 
            onMouseLeave={() => setActiveMenu(null)}>
              <a href="">More ▾</a>
         {activeMenu === 'more' && (
              <ul className='dropdown-menu'>
                <li><a href="#teachers">Teachers</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="">School Policy</a></li>
                <li><a href="">Recitals</a></li>
              </ul>
            )}
            </li>
      <li><a href="#footer">Contact</a></li>
    </ul>
    </div>
   
   
   </nav>
  );
}

export default Navbar;