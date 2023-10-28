import React from 'react'
import NavBar from '../components/common/NavBar';
import MainSlider from '../components/common/MainSlider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import '../assets/css/home.css'
import ArtistSlider from '../components/ArtistSlider';
import Services from '../components/Services';
import BandSlider from '../components/BandSlider';
import EventTable from '../components/EventTable';
import PerformanceView from '../components/PerformanceView';
import EventSlider from '../components/EventSlider';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';

export default function 
h() {
  return (
    <div>
       
        <div className='homeMainContainer'>
            
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

            {/* signup button */}

            <div className='descriptionDiv'>
                <p className='caption'>Unlock the Rhythm</p>
                <section>
                    <p className='description'>
                    Introducing a Next-Level Music Event Management Experience
                    </p>
                </section>

                <Link className='signupBtn' to={'/signup'}>SIGN UP</Link>
                
            </div>
            <label className='headingArtist'>ARTISTS</label>

            <ArtistSlider></ArtistSlider>

            <Services></Services>

            <BandSlider></BandSlider>

            <EventTable></EventTable>

            <PerformanceView></PerformanceView>

            <EventSlider></EventSlider>

            <Footer></Footer>
      </div>
    </div>
  )
}
