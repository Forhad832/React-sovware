import React from 'react'
import {Link} from 'react-router-dom'
const HomeAbout = () => {
  return (
    <div className='text-center'>
      <h4>ABOUT US</h4>
      <h3 className='title'>We are <span className='pink'>SovWare</span></h3>
      <p>We’re the people behind Directorist, wpWax, jsNorm, and more. Thousands of <br></br>
users have been successfully using our products over the years. We believe in <br></br>
making everyone’s life easier by creating a wonderful user experience among our
users.</p>
<Link to='/about' className='btn'>Learn More</Link>
    </div>
  )
}

export default HomeAbout
