import React from 'react'
import "../styles/Navbar.css"
import Logo from "../assets/pics/Logo@2x.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="logo.png" loading='lazy' className='navbar__logo'/>
    </div>
  )
}

export default Navbar