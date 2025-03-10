import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Customers from "./pages/Customers";
import Partners from "./pages/Partners";
import News from "./pages/News";
import Querry from "./pages/Querry";
import Services from "./pages/Services";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/querry" element={<Querry />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
