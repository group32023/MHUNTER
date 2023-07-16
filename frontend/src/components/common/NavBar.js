import React from 'react'
import logo from '../../assets/images/logo.png'
import '../../assets/css/navBar.css'

export default function 
NavBar() {
  return (
    <div>
        <div className='slide'>
            
        <div className='navBody'>
            <div className='logo'>
                <img src={logo} alt='logo'></img>
            </div>
            <div className='navContain'>
              <nav>
            <ul>
                <li><a href='/'>HOME</a></li>
                <li><a href='/'>EVENTS</a></li>
                <li><a href='/'>BANDS</a></li>
                <li><a href='/'>ARTISTS</a></li>
                <li><a href='/'>ABOUT US</a></li>
                <li><a href='/'>CONTACT</a></li>
                <li><a href='/'>LOGIN</a></li>
            </ul>
            </nav>
            </div>
            
        </div>
        </div>

    </div>
  )
}
