import { useState, useEffect } from 'react'
import './css/hero.css'
import {heroImage} from './js/images.js'

function Hero(){

    const imageList = [
    heroImage.hero1,
    heroImage.hero2,
    heroImage.hero3,
    heroImage.hero4,
    heroImage.hero5,
    heroImage.hero6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // Slideshow logic: changes image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageList.length]);
   return(
    <section className="hero-container" id='home'>
      {/* Background Slideshow */}
      <div 
        className="hero-slide" 
        style={{ backgroundImage: `url(${imageList[currentIndex]})` }}
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