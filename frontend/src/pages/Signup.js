import React from 'react'

export default function Signup() {

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bgimage'>
    <div className='form_signup_container p-5 rounded vh-50'>
    <div className='box-container'>
      <div className='signup_text'>
        <p>Join now and unlock the gateway to creating unforgettable moments where music and events unite!</p>
      </div>

        <div className='left-box'>
          <div>
            <h3>Get yourself hired...</h3>
          </div>
          <div>
            <p>Seamless Booking Process Promote yourself to get hired
              Secure Payments Guaranteed Support and Assistance 
              Professional Profile
            </p>
          </div>
          <div>
            <button className='signup_button'><b><span className='text-danger'>SignUp</span> for MHUNTER Artist/Band</b></button>
          </div>

        </div>
        <div className='right-box'>
          <div>
            <h3>Book a talent...</h3>
          </div>
          <div>
            <p>Wide Talent Pool
              Streamlined Booking Process
              Secure Transactions
              Transparent Refund Policy
              Feedback and Ratings
            </p>
          </div>
          <div>
            <button className='signup_button'><b><span className='text-danger'>SignUp</span> for MHUNTER Event Organizer</b></button>
          </div>
        </div>

      </div>
      
    </div>
    </div>
  )
}
