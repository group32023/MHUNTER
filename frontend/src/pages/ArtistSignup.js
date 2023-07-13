import React from 'react'

export default function ArtistSignup() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bgimage2'>
        <div className='artist_signup_form_container p-5 rounded vh-50'>
            <div className='artist-signup-left-box'>
                  <div className='artist-text'>
                    <h6><b>Start your journey to be hired today!</b></h6>
                  </div>
                  <div className='mb-2 text-white text-field'>
                    <label htmlFor='ArtistName'>Artist Name</label>
                    <input type='text' placeholder='' className='form-control'/>
                  </div>
                  <div className='mb-2 text-white text-field'>
                    <label htmlFor='Email'>Email</label>
                    <input type='email' placeholder='' className='form-control'/>
                  </div>
                  <div className='mb-2 text-white text-field' style={{display:'flex'}}>
                    <div style={{padding:'5px'}} >
                      <label htmlFor='Email'>Email</label>
                      <input type='text' placeholder='' className='form-control'/>
                    </div>
                    <div style={{padding:'5px'}}>
                      <label htmlFor='Email'>Email</label>
                      <input type='text' placeholder='' className='form-control'/>
                    </div>

                  </div>
                  <div className='mb-2 text-white text-field'>
                    <label htmlFor='PhoneNumber'>Phone Number</label>
                    <input type='number' placeholder='' className='form-control'/>
                  </div>
                  <div className='mb-2 text-white text-field'>
                    <label htmlFor='Address'>Address</label>
                    <input type='text' placeholder='' className='form-control'/>
                  </div>
            </div>
            <div className='artist-signup-right-box'>
                <div className='artist-image'>
                  <img src={require('../assets/images/artist.jpg')} height={150}/>
                </div>
                <div className=''>
                    <h6><b>ArtistSignUp</b></h6>
                </div>
            </div>

  
        </div>
    </div>

  )
}

