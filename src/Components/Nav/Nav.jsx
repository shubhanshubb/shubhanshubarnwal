import React from 'react';
import './nav.css';
import { BiHomeSmile, BiUser, BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <button 
        role="link" 
        onClick={() => setActiveNav('#')} 
        className={activeNav === '#' ? 'active' : ''}
        aria-label="Home"
      >
        <BiHomeSmile />
      </button>
      <button 
        role="link" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}
        aria-label="About"
      >
        <BiUser />
      </button>
      <button 
        role="link" 
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''}
        aria-label="Experience"
      >
        <BiBook />
      </button>
      <button 
        role="link" 
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}
        aria-label="Contact"
      >
        <BiMessageSquareDetail />
      </button>
    </nav>
  );
};

export default Nav;
