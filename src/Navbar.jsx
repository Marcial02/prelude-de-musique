import { useState } from 'react';
import { useEffect } from 'react';
import './css/navbar.css';
import './css/navbar-mobile.css';
import PDEMLogo from '/images/PDEM Logo.jpg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
  const basePath = window.location.hostname === 'localhost' ? '/prelude-de-musique/' : '/';
  

  return (
   <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
    <div className='nav-logo'>
    <HashLink smooth to={`${basePath}#hero`}>
      <img src={PDEMLogo} alt="prelude de musique logo picture" width={200} />
    </HashLink>
    </div>

    <div className={`hamburger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
           <div className="bar"></div>
      </div>

    <div className={`nav-div nav-menu ${isOpen ? "is-active" : ""} ${scrolled ? 'scrolled' : ''}`}> 
    <ul className=''>
      <li><HashLink to ={`${basePath}#hero`}>Home</HashLink></li>
      <li><HashLink to ="/about#about">About</HashLink></li>
      <li
       onMouseEnter={() => setActiveMenu('courses')} 
            onMouseLeave={() => setActiveMenu(null)}>
              <HashLink smooth to={`${basePath}#courses`}>Courses Offered ▾</HashLink>
         {activeMenu === 'courses' && (
              <ul className='dropdown-menu'>
                <li><HashLink to="/lessons#piano">Piano Lesson</HashLink></li>
                <li><HashLink to="/lessons#voice">Voice Lesson</HashLink></li>
                <li><HashLink to="/lessons#violin">Violin Lesson</HashLink></li>
                <li><HashLink to="/lessons#viola">Viola Lesson</HashLink></li>
                <li><HashLink to="/lessons#guitar">Guitar Lesson</HashLink></li>
                <li><HashLink to="/lessons#ukelele">Ukelele Lesson</HashLink></li>
                <li><HashLink to="/lessons#flute">Flute Lesson</HashLink></li>
                <li><HashLink to="/lessons#saxophone">Saxophone Lesson</HashLink></li>
                <li><HashLink to="/lessons#recorder">Recorder Lesson</HashLink></li>
                <li><HashLink to="/lessons#drum">Drum Lesson</HashLink></li>
                <li><HashLink to="/lessons#trumpet">Trumpet Lesson</HashLink></li>
              </ul>
            )}
            </li>
      <li
       onMouseEnter={() => setActiveMenu('enroll')} 
            onMouseLeave={() => setActiveMenu(null)}>
              <HashLink to="/enroll#enroll">Enroll Now ▾</HashLink>
         {activeMenu === 'enroll' && (
              <ul className='dropdown-menu'>
                 <li><HashLink to="/kawit#kawit">Kawit Branch</HashLink></li>
                <li><HashLink to="/imus#imus">Imus Branch</HashLink></li>
                <li><HashLink to="/bacoor#bacoor">Bacoor Branch</HashLink></li>
                <li><HashLink to="/dasmariñas#dasmariñas">Dasma Branch</HashLink></li>
                <li><HashLink to="/homeservice#homeservice">Home Service</HashLink></li>
                <li><HashLink to="/online#online">Online Lesson</HashLink></li>
              </ul>
            )}
            </li>
      <li
       onMouseEnter={() => setActiveMenu('more')} 
            onMouseLeave={() => setActiveMenu(null)}>
              <HashLink to="/" className='more'>More ▾</HashLink>
         {activeMenu === 'more' && (
              <ul className='dropdown-menu'>
                <li><HashLink smooth to={`${basePath}#teachers`}>Teachers</HashLink></li>
                <li><HashLink smooth to={`${basePath}#testimonials`}>Testimonials</HashLink></li>
                <li><HashLink smooth to="/enroll#enroll">Prices</HashLink></li>
                <li><HashLink smooth to="/about#about">School Policy</HashLink></li>
                <li><HashLink smooth to="/recitals#recitals">Recitals</HashLink></li>
                <li><HashLink smooth to={`${basePath}#feature`}>Feature</HashLink></li>
              </ul>
            )}
            </li>
      <li><HashLink smooth to="#contact">Contact</HashLink></li>
    </ul>
    </div>
   
   
   </nav>
  );
}

export default Navbar;