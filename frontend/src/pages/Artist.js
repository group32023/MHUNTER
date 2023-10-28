import React from 'react'
import NavBar from '../components/common/NavBar';
import MainSlider from '../components/common/MainSlider';
import backgroundimage from '../assets/images/backgroundimage1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container} from 'react-bootstrap';



import Footer from '../components/common/Footer';
import ArtistSlider from '../components/ArtistSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faList} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import '../assets/css/home.css'
import '../assets/css/event.css'

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
                <p className='caption1'>Home {'>'} Artists</p>
                </div>
                <section>
                    <p className='description1'>
                    Elevate your events with outstanding musical talent. MHUNTER provides a vast network of  artists, allowing you to handpick the perfect lineup. Easily browse, select, and assign artists to specific slots, ensuring a diverse and captivating program that leaves the crowd wanting more.                     
                    </p>
                    <p className='description2'>
                    Create Stunning Events:
                    <br></br>
                    With MHUNTER, event creation is a breeze. Seamlessly set up and customize your music events with essential details like event name, date, time, location. Craft the perfect atmosphere for your attendees, ensuring an unforgettable experience from start to finish.                    </p>
              
                </section>
             
                <div className='eventcontainer'>

                    <Form.Select aria-label="Default select example" align-items-center justify-content-center id="selectionMenu">
                    <FontAwesomeIcon icon={faList} />
                      <option>Status</option>
                      <option value="name">Artist Name</option>
                      
                    </Form.Select>

                    <Container>
                      <Form.Control
                        className="smaller-input"
                        name="foo" id="statusInput"
                        placeholder="Search Here"
                      />
                    </Container>
                     
                    <ArtistSlider></ArtistSlider>
                    <Footer></Footer>

                </div>

            </div>
           

      </div>
    </div>
  )
}
