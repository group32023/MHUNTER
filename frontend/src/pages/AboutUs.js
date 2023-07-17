import React,{useState} from 'react'
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
import '../assets/css/aboutus.css'

export default function 
App() {
    const [show,setShow]=useState(false);
    const initialText = '+';
  const [buttonText, setButtonText] = useState(initialText);

  function viewContentPayments(){
    if(buttonText==='+'){
        setShow(true);
        setButtonText('-');

    }
    else{
        setShow(false);
        setButtonText('+');
    }
    

  }
  function viewContentPayemntOptions(){
    if(buttonText==='+'){
        setShow(true);
        setButtonText('-');

    }
    else{
        setShow(false);
        setButtonText('+');
    }

  }
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
                <p className='caption1'>Home {'>'} About Us</p>
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

                   
                      <Table className='table table-hover table-dark ' id="tableEvents" >

                            <tbody>
                            <tr>
                                <td>PAYMENT OPTIONS
                                <button type="button" class="btn btn-default btn-circle" id="aboutUSviewbtn1" onClick={viewContentPayments}>{buttonText}</button> </td>
                                
                            </tr>
                             <tr >
                             {                             
                                show && <div id="payments">Hello world! <br></br>hi hi <br></br>jkvo </div>
                             }
                             </tr>
                             
                             <tr>
                                <td>PAYMENT OPTIONS
                                <button type="button" class="btn btn-default btn-circle" id="aboutUSviewbtn2" onClick={viewContentPayemntOptions}>{buttonText}</button> </td>
                               
                            </tr>
                             <tr>
                             {                             
                                show && <div>Hello world hi! </div>
                             }
                             </tr>

                            </tbody>
                       
                      </Table>
                  

                </div>

            </div>
            

      </div>
    </div>
  )
}
