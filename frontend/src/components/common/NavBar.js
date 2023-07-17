import React from 'react'
import logo from '../../assets/images/logo.png'
import '../../assets/css/navBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <div className='slide'>

        <div className='navBody'>
          <div className='logo'>
            <img src={logo} alt="Description of the image"></img>
          </div>
          <div className='navContain'>
            <ul>
                <li>HOME</li>
                <li>EVENTS</li>
                <li>BANDS</li>
                <li>ARTISTS</li>
                <li>ABOUT US</li>
                <li>CONTACT</li>
                <li><Link to="/login">LOGIN</Link></li>
                
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}
