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
        <a href='https://facebook.com/MeShubhanshu'><FaFacebookF/></a>
        <a href='https://instagram.com/shubhanshubb'><BsInstagram/></a>
        <a href='https://twitter.com/shubhanshubb'><FiTwitter/></a>
        <a href='https://www.linkedin.com/in/shubhanshubb/'><FiLinkedin/></a>
        <a href='https://github.com/shubhanshubb'><FiGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; SBTech. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
