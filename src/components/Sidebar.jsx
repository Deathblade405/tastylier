import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [active, setActive] = useState('/About'); // Initial state should match your route

  const handleSetActive = (path) => {
    setActive(path);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link 
            to="/About" 
            onClick={() => handleSetActive('/About')} 
            className={active === '/About' ? 'active' : ''}
          >
            About Tastylier
          </Link>
        </li>
        <li>
          <Link 
            to="/Project" 
            onClick={() => handleSetActive('/Project')} 
            className={active === '/Project' ? 'active' : ''}
          >
            Social Media
          </Link>
        </li>
        <li>
          <Link 
            to="/Skills" 
            onClick={() => handleSetActive('/Skills')} 
            className={active === '/Skills' ? 'active' : ''}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link 
            to="/Sponsorships" 
            onClick={() => handleSetActive('/Sponsorships')} 
            className={active === '/Sponsorships' ? 'active' : ''}
          >
            Sponsorships
          </Link>
        </li>
        <li>
          <Link 
            to="/Supporters" 
            onClick={() => handleSetActive('/Supporters')} 
            className={active === '/Supporters' ? 'active' : ''}
          >
            Supporters
          </Link>
        </li>
        <li>
          <Link 
            to="/Contact" 
            onClick={() => handleSetActive('/Contact')} 
            className={active === '/Contact' ? 'active' : ''}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
