import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ScrollToTop from './components/ScrollToTop';
import Navbar from "./components/NavBar";
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/AboutUs';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
 

  return (
    <>
      <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} /> 
            <Route path="/gallery" element={<Gallery />} />  
            <Route path="/projects" element={<Projects />} />        
            <Route path="/contact" element={<Contact />} />        
          </Routes>
           <Footer />
      </Router>
    
    </>
  )
}

export default App
