import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import Skills from './pages/Skills';
import Stories from './pages/Stories';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Shop />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
