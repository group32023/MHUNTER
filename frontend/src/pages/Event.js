import React from 'react'
import NavBar from '../components/common/NavBar';
import MainSlider from '../components/common/MainSlider';
import backgroundimage from '../assets/images/backgroundimage1.jpg';
import eventimage from '../assets/images/slide_8.jpg';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container} from 'react-bootstrap';




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList} from '@fortawesome/free-solid-svg-icons'
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
                <p className='caption1'>Home {'>'} Events</p>
                </div>
                <section>
                    <p className='description1'>
                    Welcome to MHUNTER, the all-in-one music event management system that puts you in control of creating and managing incredible music events. Whether you're a seasoned event planner, or a budding organizer, MHUNTER empowers you to bring your musical visions to life.
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
                      <option value="name">Event Name</option>
                      <option value="date">Date</option>
                      <option value="location">Location</option>
                    </Form.Select>

                    <Container>
                      <Form.Control
                        className="smaller-input"
                        name="foo" id="statusInput"
                        placeholder="Enter Event Detail Here"
                      />
                    </Container>
                      <Table className='table table-hover table-dark' id="tableEvent" >
                        <tbody>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                         
                          
                        </tbody>
                      </Table>
                  

                </div>

            </div>
            

      </div>
    </div>
  )
}
