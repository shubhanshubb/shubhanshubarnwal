import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import SB_Tech from '../../assets/SB_Tech.png';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <div className="sbTech">
        <img src={SB_Tech} alt="tech" />
      </div>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/MeShubhanshu" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com/shubhanshubb" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
        <a href="https://twitter.com/shubhanshubb" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
        <a href="https://www.linkedin.com/in/shubhanshubb/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
        <a href="https://github.com/shubhanshubb" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
      </div>

      <div className="footer_copyright">
        <small>© {new Date().getFullYear()} SBTech</small>
      </div>
    </footer>
  );
};

export default Footer;
