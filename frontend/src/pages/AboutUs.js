import React,{useState, useEffect,useRef} from 'react'
import NavBar from '../components/common/NavBar';
import MainSlider from '../components/common/MainSlider';
import backgroundimage from '../assets/images/backgroundimage1.jpg';
import eventimage from '../assets/images/slide_8.jpg';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container} from 'react-bootstrap';


import Footer from '../components/common/Footer';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import '../assets/css/home.css'
import '../assets/css/event.css'
import '../assets/css/aboutus.css'

export default function 
App() {

    //     id:
    // })
    // }
//     const [show,setShow]=useState(false);
//     const initialText = '+';
//   const [buttonText, setButtonText] = useState(initialText);

//   function viewContentPayments(){
//     if(buttonText==='+'){
//         setShow(true);
//         setButtonText('-');

//     }
//     else{
//         setShow(false);
//         setButtonText('+');
//     }
    

//   }
//   function viewContentPayemntOptions(){
//     if(buttonText==='+'){
//         setShow(true);
//         setButtonText('-');

//     }
//     else{
//         setShow(false);
//         setButtonText('+');
//     }

///////////

// const [ButtonID,setButtonID]= useState("btn")
// var [buttonText, setButtonText] = useState('+');


// function setButtonIDFunction(){
  

    
// }

    const [showDiv1, setShowDiv1] = useState(false);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    const [showDiv4, setShowDiv4] = useState(false);
    const [showDiv5, setShowDiv5] = useState(false);
    const [showDiv6, setShowDiv6] = useState(false);


    // Initialize state to store the content of each button
    const [button1Content, setButton1Content] = useState('+');
    const [button2Content, setButton2Content] = useState('+');
    const [button3Content, setButton3Content] = useState('+');
    const [button4Content, setButton4Content] = useState('+');
    const [button5Content, setButton5Content] = useState('+');
    const [button6Content, setButton6Content] = useState('+');

    // Add more states for other buttons if you have more
  
    // Event handler for button clicks
    const handleButtonClick = (buttonNumber) => {
      // Update the content based on the button number
      if (buttonNumber === "aboutUSviewbtn1") {
        if(button1Content==="+"){
            setButton1Content('-');
            setShowDiv1(true)

        }else{
            setButton1Content('+');
            setShowDiv1(false)


        }
       
      } else if (buttonNumber === "aboutUSviewbtn2") {
        if(button2Content==="+"){
            setButton2Content('-');
            setShowDiv2(true)

        }else{
            setButton2Content('+');
            setShowDiv2(false)


        }
      }

      else if (buttonNumber === "aboutUSviewbtn3") {
        if(button3Content==="+"){
            setButton3Content('-');
            setShowDiv3(true)

        }else{
            setButton3Content('+');
            setShowDiv3(false)


        }
      }

      else if (buttonNumber === "aboutUSviewbtn4") {
        if(button4Content==="+"){
            setButton4Content('-');
            setShowDiv4(true)

        }else{
            setButton4Content('+');
            setShowDiv4(false)


        }
      }

      else if (buttonNumber === "aboutUSviewbtn5") {
        if(button5Content==="+"){
            setButton5Content('-');
            setShowDiv5(true)

        }else{
            setButton5Content('+');
            setShowDiv5(false)


        }
      }
      else if (buttonNumber === "aboutUSviewbtn6") {
        if(button6Content==="+"){
            setButton6Content('-');
            setShowDiv6(true)

        }else{
            setButton6Content('+');
            setShowDiv6(false)


        }
      }
      // Add more conditions for other buttons if you have more
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

            <div className='descriptionDivoption'>
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
             
                <div className='eventOptioncontainer'>

                   
                      <Table className='table table-hover table-dark ' id="tableEvents" >

                            <tbody>
                            <tr>
                                <td>PAYMENT OPTIONS
                                <button type="button" class="btn btn-default btn-circle" id="aboutUSviewbtn1" onClick={() => handleButtonClick("aboutUSviewbtn1")} >{button1Content}</button> </td>
                                
                            </tr>
                             <tr >
                             {                             
                                showDiv1 && <div id="payments"> MHunter offers a variety of flexible payment options for both organizers and artists/bands. Organizers can securely make advance payments to secure their preferred talent, ensuring trust and reliability in the booking process. Payments can be either full or half, depending on the agreement between the parties. The integrated payment system ensures seamless financial transactions, eliminating concerns of financial mismanagement. With state-of-the-art payment technology, MHunter ensures that all transactions are safe and transparent, providing peace of mind to all users.
                                </div>
                             }
                             </tr>
                             
                             <tr>
                                <td>STATE OF THE TECHNOLOGY
                                <button type="button" class="btn btn-default btn-circle" id="aboutUSviewbtn2" onClick={() => handleButtonClick("aboutUSviewbtn2")} >{button2Content}</button></td>
                               
                            </tr>
                             <tr>
                             {                             
                                showDiv2 && <div id="technology">MHunter leverages cutting-edge technology to streamline the process of hiring singers and music bands for events. The platform's user-friendly interface, advanced search capabilities, and integrated payment system represent the state of the art in event management technology. The system uses the latest security measures to protect user data and financial transactions, ensuring a secure and efficient environment for event planning. With real-time updates, comprehensive artist/band profiles, and advanced features, MHunter is at the forefront of innovation in the event management industry.</div>
                             }
                             </tr>

                             <tr>
                                <td>CUSTOMER CARE SERVICE
                                <button type="button" class="btn btn-default btn-circle" id="aboutUSviewbtn3" onClick={() => handleButtonClick("aboutUSviewbtn3")} >{button3Content}</button></td>
                               
                            </tr>
                             <tr>
                             {                             
                                showDiv3 && <div id="service">MHunter is committed to providing top-notch customer care service. The platform offers prompt support to address inquiries and issues from users. In case of complaints or disputes, a dedicated moderator reviews the issues and ensures fair resolutions, maintaining positive relationships with all users. The presence of a responsive customer care service adds an extra layer of trust and reliability to the platform, making the experience of hiring artists and bands a smooth and enjoyable one.</div>
                             }
                             </tr>

                             <tr>
                                <td>LOW RATES
                                <button type="button" class="btn btn-default btn-circle" id="aboutUSviewbtn4" onClick={() => handleButtonClick("aboutUSviewbtn4")} >{button4Content}</button></td>
                               
                            </tr>
                             <tr>
                             {                             
                                showDiv4 && <div id="rates">MHunter is designed to reduce the financial burden on event organizers. By eliminating the need for intermediaries or coordinators, the platform allows organizers to hire artists and bands directly, without additional commission fees. This cost-saving benefit provides organizers with access to a wide network of talented performers at competitive rates, ensuring that they get the best value for their money. MHunter aims to make quality entertainment affordable and accessible. </div>
                             }
                             </tr>

                             <tr>
                                <td>FREE PUBLICITY
                                <button type="button" class="btn btn-default btn-circle" id="aboutUSviewbtn5" onClick={() => handleButtonClick("aboutUSviewbtn5")} >{button5Content}</button></td>
                               
                            </tr>
                             <tr>
                             {                             
                                showDiv5 && <div id="free">For emerging artists and bands, MHunter offers a valuable opportunity for free publicity and exposure. By creating comprehensive artist and band profiles, sharing performances, and connecting with event organizers, talented individuals and groups can gain visibility in the music industry. This free publicity not only benefits the artists but also enriches the event planning experience by providing a diverse range of musical options.</div>
                             }
                             </tr>

                             <tr>
                                <td>SECURITY
                                <button type="button" class="btn btn-default btn-circle" id="aboutUSviewbtn6" onClick={() => handleButtonClick("aboutUSviewbtn6")} >{button6Content}</button></td>
                               
                            </tr>
                             <tr>
                             {                             
                                showDiv6 && <div id="security">MHunter places a strong emphasis on security, ensuring that all user data and financial transactions are protected. The platform verifies and validates artists, offering trust and reliability to event organizers. Additionally, a transparent refund policy ensures that organizers are financially protected in cases of event cancellations or rescheduling. With robust security measures in place, MHunter provides a safe and secure environment for all users, eliminating the risks associated with traditional hiring methods.</div>
                             }
                             </tr>




                            </tbody>
                       
                      </Table>
                  
                      {/* <Footer></Footer> */}

                </div>

            </div>

            <div className='footerForHomeAboutUs'>

                <Footer></Footer>

                </div>
            

      </div>
    </div>
  )
}
