import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-login.png'

export default function ArtistBandSignup() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bgimage'>
    <div className='form_signup_container p-5 vh-50'>
    <div className='box-container'>
      <div className='signup_text'>
        <p>Join now and unlock the gateway to creating unforgettable moments where music and events unite!</p>
        <div className='logo-in-login'>
            <img src={logo} alt="Description of the image"></img>
        </div>
      </div>

        <div className='left-box'>
          <div>
            <h3 className='header'>Artist</h3>
          </div>
          <div className='artist-image'>
            <img src={require('../assets/images/artist.jpg')} alt={'artist'} height={180} width={180}/>
          </div>
          <div>
            <Link to={"/artistsignup"}>
            <button className='signup_button'><b><span className='text-danger'>SignUp</span> for MHUNTER Artist</b></button>
            </Link>
          </div>

        </div>
        <div className='right-box'>
          <div>
            <h3 className='header'>Band</h3>
          </div>
          <div className='band-image'>
            <img src={require('../assets/images/band.jpg')} alt={'artist'}  height={180} width={180}/>
          </div>
          <div>
          <Link to={"/bandsignup"}>
            <button className='signup_button'><b><span className='text-danger'>SignUp</span> for MHUNTER Band</b></button>
          </Link>
          </div>
        </div>

      </div>
      
    </div>
    </div>
  )
}
