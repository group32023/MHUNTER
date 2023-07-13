import React from 'react'


export default function ArtistBandSignup() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bgimage'>
    <div className='form_signup_container p-5 rounded vh-50'>
    <div className='box-container'>
      <div className='signup_text'>
        <p>Join now and unlock the gateway to creating unforgettable moments where music and events unite!</p>
      </div>

        <div className='left-box'>
          <div>
            <h3 className='header'>Artist</h3>
          </div>
          <div className='artist-image'>
            <img src={require('../assets/images/artist.jpg')} height={180}/>
          </div>
          <div>
            
            <button className='signup_button'><b><span className='text-danger'>SignUp</span> for MHUNTER Artist</b></button>
            
          </div>

        </div>
        <div className='right-box'>
          <div>
            <h3 className='header'>Band</h3>
          </div>
          <div className='band-image'>
            <img src={require('../assets/images/band.jpg')} height={180} width={150}/>
          </div>
          <div>
            <button className='signup_button'><b><span className='text-danger'>SignUp</span> for MHUNTER Band</b></button>
          </div>
        </div>

      </div>
      
    </div>
    </div>
  )
}
