import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { FaBars } from 'react-icons/fa';
const Navbar = () => {

  const navRef = useRef();
  const showbar = ()=>{
    navRef.current.classList.toggle('responsive')
  }
  return (
    <header>
      <div className='container'>
        <nav >
            <div className='logo'>
                <h2><span>sov</span>ware</h2>
            </div>
            <div ref={navRef} className='nav_container'>
                <NavLink to='/home' className='nav_link'>Home</NavLink>
                <NavLink to='/about' className='nav_link'>About</NavLink>
                <NavLink to='/career' className='nav_link'>Career</NavLink>
                <NavLink to='/contact' className='nav_link'>Contact</NavLink>
            </div>
            <button className='toggle' onClick={showbar}><FaBars className='bar'/></button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
