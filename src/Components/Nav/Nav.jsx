import React from 'react'
import './nav.css'
import { BiHomeSmile} from 'react-icons/bi'
import { BiUser} from 'react-icons/bi'
import { BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  const handleClick = (e, hash) => {
    e.preventDefault()
    setActiveNav(hash)
    window.location.hash = hash
  }
  return (
    <nav>
      <button onClick={(e) => handleClick(e, '#')} className={activeNav === '#' ? 'active' : ''}><BiHomeSmile/></button>
      <button onClick={(e) => handleClick(e, '#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></button>
      <button onClick={(e) => handleClick(e, '#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></button>
      <button onClick={(e) => handleClick(e, '#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></button>
    </nav>
  )
}

export default Nav
