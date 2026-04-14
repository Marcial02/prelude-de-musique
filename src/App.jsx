import { useState } from 'react'
import './css/global.css'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import Price from './Price.jsx'
import Enroll from './Enroll.jsx'
import Contact from './Contact.jsx'
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/700.css"; // bold links/headers
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
   <BrowserRouter basename="/prelude-de-musique">
      {/* Nav is inside the Router so Links work! */}
      <Navbar />

      <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Price" element={<Price />} />
      <Route path="/Enroll" element={<Enroll />} />
      </Routes>
      <Contact />
      <Footer />

    </BrowserRouter>
  )
}

export default App
