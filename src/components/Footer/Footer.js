import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row align-items-stretch'>
            <div className='col-4'>
                <h2>sovware</h2>
            </div>
            <div className='col-4'>
                <div className='footer-content'>
                <h4>Products</h4>
                <div className='list'>
                    <Link to='/' className='nav_link' >Home</Link>
                    <Link to='/' className='nav_link' >Directorist</Link>
                    <Link to='/' className='nav_link' >wpWax</Link>
                    <Link to='/' className='nav_link' >jsNorm</Link>
                    <Link to='/' className='nav_link' >Dashboard Market</Link>
                </div>
                </div>
            </div>
            <div className='col-4'>
            <div className='footer-content'>
                <h4>Company</h4>
                <div className='list'>
                    <Link to='/' className='nav_link' >About Us</Link>
                    <Link to='/' className='nav_link' >Career</Link>
                    <Link to='/' className='nav_link' >Blog</Link>
                    <Link to='/' className='nav_link' >Contact</Link>
                    
                </div>
                </div>
            </div>
            <div className='col-4'>
            <div className='footer-content'>
                <h4>Keep Updated</h4>
                <div className='list'>
                  <p>Subscribe to our email newsletter to receive updates.</p>
                    <input type='text'  name='user_name' placeholder='Email Address'/>
                </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className='text-center'>
            <p>© 2021SovWare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
