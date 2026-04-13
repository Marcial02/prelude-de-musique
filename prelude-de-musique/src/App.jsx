import { useState } from 'react'
import './css/global.css'
import Home from './Home.jsx'
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/700.css"; // bold links/headers
import Testimonials from './Testimonials.jsx';

function App() {

  return (
    <>
   <Home />
   <Testimonials />
   </>
  )
}

export default App
