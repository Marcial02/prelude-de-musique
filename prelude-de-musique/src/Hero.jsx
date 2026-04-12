import { useState, useEffect } from 'react'
import './css/hero.css'

function Hero(){

    const images = [
    './images/hero1.jpg',
    './images/hero2.jpg',
    './images/hero3.jpg',
    './images/hero4.jpg',
    './images/hero5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // Slideshow logic: changes image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
   return(
    <section className="hero-container" id='home'>
      {/* Background Slideshow */}
      <div 
        className="hero-slide" 
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Black Overlay */}
      <div className="hero-overlay"></div>

      {/* Content Overlay */}
      <div className="hero-content">
        <h2 className='hero-title'>Prelude De Musique</h2>
        <h1 className="hero-tagline">One-On-One Music Lessons</h1>
        <h2 className='hero-tagline-sub'>in Almost Any Age</h2>
        <p className="hero-pitch">Take part of over 100 plus students who actively take music classes from our four branches: Kawit, Imus, Bacoor and Dasmariñas. Piano, Voice, Violin, Viola, Guitar, Ukulele, Flute, Recorder, Saxophone, Trumpet and Drums. </p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
   ) 
}

export default Hero