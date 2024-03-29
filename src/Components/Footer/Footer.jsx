import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a fref="#" className='footer_logo'>SBTech</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#textimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://facebook.com/MeShubhanshu' target="_blank"><FaFacebookF/></a>
        <a href='https://instagram.com/shubhanshubb' target="_blank"><BsInstagram/></a>
        <a href='https://twitter.com/shubhanshubb' target="_blank"><FiTwitter/></a>
        <a href='https://www.linkedin.com/in/shubhanshubb/' target="_blank"><FiLinkedin/></a>
        <a href='https://github.com/shubhanshubb' target="_blank"><FiGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>SBTech. All rights reserved &copy; 2023</small>
      </div>
    </footer>
  )
}

export default Footer
