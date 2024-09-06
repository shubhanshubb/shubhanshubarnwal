import React, { useState } from 'react';
import './nav.css';
import { BiHomeSmile, BiUser, BiBook, BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (id) => {
    setActiveNav(id);
    document.getElementById(id.slice(1)).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <button onClick={() => handleNavClick('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeSmile /></button>
      <button onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></button>
      <button onClick={() => handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></button>
      <button onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></button>
    </nav>
  );
};

export default Nav;
