import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Link } from 'react-router-dom'
import 'typeface-poppins';




function Navbar() {
  return (
    <>
      <div className='home-image'>
        <Link to="/login" className="no-link-style">
          <button className="home-button">
            Login
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
        </Link>
        <div>
          <h1 className='home-h1'>CAREERHIVE</h1>   </div>
          <div>
          <p className='home-p'>Discover thousands of job listings from top companies. Whether you're 
       looking for a fresh start, a better job, or a new career direction, you'll 
        find the job that's right for you.</p>
        </div>
        </div>


       
        
     
    </>
  )
}
export default Navbar



