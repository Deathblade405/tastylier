import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Sponsorships from './components/Sponsorships'; 
import Supporters from './components/Supporters'; // Import the Supporters component
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="section">
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Sponsorships" element={<Sponsorships />} />
            <Route path="/Supporters" element={<Supporters />} /> {/* Add Supporters route */}
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Footer added so it's visible across all pages */}
      </div>
    </Router>
  );
};

export default App;
