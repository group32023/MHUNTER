import React from 'react'
import NavBar from '../components/common/NavBar';
import MainSlider from '../components/common/MainSlider';
import Tabs from '../components/common/Tabs';

import backgroundimage from '../assets/images/backgroundimage1.jpg';
import artistImage from '../assets/images/shihan.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container} from 'react-bootstrap';
import Footer from '../components/common/Footer';





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faList} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import '../assets/css/home.css'
import '../assets/css/Artistdetails.css'

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
                <p className='caption1'>ARTISTS {'>'} SHEHAN MIHIRANGA</p>
                </div>
                <div>
                <div className='captionbackground2'>
                <div className='name'>SHEHAN MIHIRANGA</div>
                <div className="image-with-content">
        <div className="image-container">
          <img src={artistImage} alt="artistImage" className='artistImage' />
        </div>
        <div className="content-container">
        <p className="artistDetails">
        Shehan Mihiranga is a renowned Sri Lankan artist known for his exceptional musical talent.
        With his soulful voice and captivating performances, Shehan has captivated audiences both in Sri Lanka and internationally. 
        He has gained popularity for his versatility, seamlessly blending genres such as pop,
        R&B, and traditional Sri Lankan music in his compositions. Shehan's heartfelt lyrics and melodious melodies have made him a 
        beloved figure in the Sri Lankan music industry, and his contributions have earned him numerous accolades and a dedicated fan base.
        </p>
        </div>
        </div>
      </div>
      <div><Tabs></Tabs></div>
      

    </div>

</div>
            </div>


      </div>            

  )
}
