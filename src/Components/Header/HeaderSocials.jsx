import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/shubhanshubb/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/shubhanshubb" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/shubhanshubb/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
