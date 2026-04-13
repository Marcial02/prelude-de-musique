import { useState } from 'react'
import './css/global.css'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/700.css"; // bold links/headers
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
   <BrowserRouter>
      {/* Nav is inside the Router so Links work! */}
      <Navbar /> 

      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
