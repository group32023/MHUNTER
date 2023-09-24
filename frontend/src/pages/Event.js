import React,{useState, useEffect,useRef} from 'react';
import NavBar from '../components/common/NavBar';
import MainSlider from '../components/common/MainSlider';
import backgroundimage from '../assets/images/backgroundimage1.jpg';
import eventimage from '../assets/images/slide_8.jpg';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container} from 'react-bootstrap';
import eventType from '../assets/images/eventtype.png'
import Pagination from '../components/common/Pagination';
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import eventtype from '../assets/images/eventtype.png';
import profileImage from '../assets/images/profilePhoto.jpeg';
import { useNavigate} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


import '../assets/css/home.css'
import '../assets/css/event.css'







export default function ArtistPendingRequests() {



const [expand,setExpandedSideBar] = useState(true)

  const [eventList, setEventList] = useState([]);
  const [currentPage, setCurrentPage] =useState(1);
  const [linePerPage, setLinePerPage] = useState(4);

  useEffect(() => {
    // Fetch the data from the Java backend
    const getPendingRequest = async () =>{
      const res = await fetch('http://localhost:8080/requestMusicMember/pendingRequest/758463')

      const data = await res.json();
        setEventList(data);
      };
     getPendingRequest();

     console.log(eventList)

  }, []);
  



  let navigate = useNavigate();

  const load=(id)=>{
    navigate(`/artist/PendingRequestView/${id}`);

  }


  const divCount = eventList.length;
  const divElements = [];
 

  //Using a for loop to generate the <div> tags
  for (let i = 0; i < divCount; i++) {

  console.log(eventList[i]['eventName']);
  
    
    divElements.push(<div key={i} className="requestContainerForEvent">
      <img src={profileImage} className="profile"></img>
      <div className="eventDetails">
        <h5>{eventList[i]['organizerName']}</h5>
        
        <p class="eventType"><img src={eventtype} className="EventIconPendingRequest1"></img>{eventList[i]['eventName']}</p>
      <p class="eventDate"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest"/>{eventList[i]['date']}</p>
        <p class="venue"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest"/> {eventList[i]['place']}</p>
      </div>
     
   
    
      
   
  </div>

  );
  }







  return (
    <div >
       
        <div >
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

                    <Container>
                      <Form.Control
                        className="smaller-input"
                        name="foo" id="statusInput"
                        placeholder="Search Here"
                      />
                    </Container>
                    
                  {divElements}

                </div>

            </div>
            

      </div>
    </div>
  )
}
