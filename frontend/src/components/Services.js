import React from 'react'
import '../assets/css/services.css'
import event from '../assets/images/event.png'
import microphone from '../assets/images/microphone.png'
import drumset from '../assets/images/drum-set.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function 
() {
  return (
    <div>
        <div >
          <div className='services'></div>
            <label className='serviceHeader'>SERVICES</label>
            <div className='service1'>
              <img src={event} className='eventImg'></img>
              <label className='createEventLable'>CREATE EVENT</label>
              <p className='eventDescription'>Expertly curate your music event: Define the event type, set the ideal location, handpick talented artists and bands, and unleash an unforgettable experience.</p>
              <button type="button" className="btn btn-outline-light" id='SeeMoreEventMicrophoneBand'>READ MORE</button>

            </div>
            <div className='service2'>
              <img src={microphone} className='eventImg'></img>
              <label className='createEventLable'>HIRE ARTISTS</label>
              <p className='eventDescription'>Discover extraordinary talent: Elevate your event with top-notch artists. Explore and hire musicians effortlessly through our website.</p>
              <button type="button" className="btn btn-outline-light" id='SeeMoreEventMicrophoneBand'>READ MORE</button>
            </div>
            <div className='service3'>
              <img src={drumset} className='eventImg'></img>
              <label className='createEventLable'>HIRE BANDS</label>
              <p className='eventDescription'>Amplify your event with outstanding bands: Find the perfect musical group to elevate your gathering. Explore and hire exceptional bands effortlessly through our website.</p>
              <button type="button" className="btn btn-outline-light" id='SeeMoreEventMicrophoneBand'>READ MORE</button>            
            </div>
        </div>
    </div>
  )
}
