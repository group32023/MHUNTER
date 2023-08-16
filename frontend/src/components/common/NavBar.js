import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import '../../assets/css/navBar.css'



export default function NavBar() {
  var [isScroll,setScroll] = useState(false)
  var url = window.location.href
  var location = url.split('/')[3]

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>100){
        setScroll(true)
      }
      else{
        setScroll(false)
      }
    }

    window.addEventListener('scroll',handleScroll)
  return()=>{
    window.removeEventListener('scroll',handleScroll)
  }

  },[])

  return (
    <div>
        <div className='slide'>
            
        <div className={`${isScroll ? 'scroll':'navBody'}`}>
            <div className='logo'>
                <img src={logo} alt='logo'></img>
            </div>
            <div className='navContain'>
              <nav>
            <ul>
                <li><a href='/' className={`${(location.length===0) ? 'active':''}`}>HOME</a></li>
                <li><a href='/event' className={`${(location==='event') ? 'active':''}`}>EVENTS</a></li>
                <li><a href='/band' className={`${(location==='band') ? 'active':''}`}>BANDS</a></li>
                <li><a href='/artist'  className={`${(location==='artist') ? 'active':''}`}>ARTISTS</a></li>
                <li><a href='/aboutUs' className={`${(location==='aboutUs') ? 'active':''}`}>ABOUT US</a></li>
                <li><a href='/' className={`${(location==='contact') ? 'active':''}`}>CONTACT</a></li>
                <li><a href='/login'>LOGIN</a></li>
            </ul>
            </nav>
            </div>
            
        </div>
        </div>
      </div>

    
  )
}
