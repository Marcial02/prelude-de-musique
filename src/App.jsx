import { useState } from 'react'
import './css/global.css'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import Price from './Price.jsx'
import Enroll from './Enroll.jsx'
import Contact from './Contact.jsx'
import Bacoor from './SubPages/BacoorBranch.jsx'
import Imus from './SubPages/ImusBranch.jsx'
import Kawit from './SubPages/KawitBranch.jsx'
import Dasmariñas from './SubPages/DasmariñasBranch.jsx'
import Online from './SubPages/Online.jsx'
import HomeService from './SubPages/HomeService.jsx'
import Recitals from './Recitals.jsx'
import Recitals1 from './SubPages/Recitals1.jsx'
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/700.css"; // bold links/headers
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
   <BrowserRouter basename="/prelude-de-musique">
      {/* Nav is inside the Router so Links work! */}
      <Navbar />

      <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="price" element={<Price />} />
      <Route path="enroll" element={<Enroll />} />
      <Route path="recitals" element={<Recitals />} />


      <Route path="bacoor" element={<Bacoor />} />
      <Route path="imus" element={<Imus />} />
      <Route path="dasmariñas" element={<Dasmariñas />} />
      <Route path="kawit" element={<Kawit />} />
      <Route path="online" element={<Online />} />
      <Route path="homeservice" element={<HomeService />} />
      <Route path="*" element={<Home />} />
      </Routes>
      <Contact />
      <Footer />

    </BrowserRouter>
  )
}

export default App
