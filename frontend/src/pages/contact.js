import React from 'react'
import NavBar from '../components/common/NavBar';
import MainSlider from '../components/common/MainSlider';
import backgroundimage from '../assets/images/backgroundimage1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container} from 'react-bootstrap';
import Footer from '../components/common/Footer';
import location from '../assets/images/location.png'
import hotline from '../assets/images/hotline.png'
import { Link } from 'react-router-dom';
import clock from '../assets/images/clock.png'





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faList} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import '../assets/css/home.css'
import '../assets/css/contact.css'

export default function 
h() {
    
  return (
    <div>
       
        <div>
        <img src={backgroundimage} id="backgroundimage"></img>
        <MainSlider></MainSlider>
            <div>
                <NavBar></NavBar>
            </div>
            <p className='telno'>Call Us: +94773374306</p>
            <FontAwesomeIcon icon={faPhone} className='telIcon' />
            
            <FontAwesomeIcon icon={faFacebook} className='facebookIcon'/>
            <FontAwesomeIcon icon={faTwitter} className='twitterIcon' />
            <FontAwesomeIcon icon={faGooglePlusG} className='googlePlusIcon'/>
            <FontAwesomeIcon icon={faLinkedinIn} className='linkedInIcon' />

            {/* signup button*/}

            <div className='descriptionDiv'>
                <p className='caption'>Unlock the Rhythm</p>
                <section>
                    <p className='description'>
                    Introducing a Next-Level Music Event Management Experience
                    </p>
                </section>

                <button className='signupBtn'>SIGN UP</button>
                 
            </div>

            <div className='descriptionDiv1'>
               <div className='captionbackground'>
                <p className='caption1'>HOME {'>'} CONTACT</p>
                </div>
               
             <div>
                <div class="map">
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9283954771886!2d79.85487667464785!3d6.899167393100105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25961e5f288c9%3A0x8fa7cee7dbdd8697!2s33%2C%2023%20Queen&#39;s%20Rd%2C%20Colombo%2000300!5e0!3m2!1sen!2slk!4v1690021295416!5m2!1sen!2slk" >
                 </iframe>
                </div>

                <div className='ContactDetailsDiv'>
                <div className='contactItem'>
                <img src={location} className='location' ></img>
                <span className   = 'imageText'>33/23/1/1,<br></br>Queens Road,<br></br> Bambalapitiya ,<br></br>Sri Lanka</span>
                </div>
                <div className='contactItem'>
                <img src={hotline} className='location' ></img>
                <span className='imageText'>HOT LINE<br></br> +94773374306<br></br> +94773374308</span>
                </div>
                <div className='contactItem'>
                <img src={clock} className='location' ></img>
                <span className='imageText'>Working hours-<br></br> Monday to Friday<br></br> 9.00 AM  to 5.00 PM</span>
                </div>
              
                </div>

                </div>

            </div>


      </div>            

    </div>
  )
}
