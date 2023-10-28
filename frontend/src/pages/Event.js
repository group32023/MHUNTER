import React,{useState, useEffect,useRef} from 'react';
import NavBar from '../components/common/NavBar';
import MainSlider from '../components/common/MainSlider';
import backgroundimage from '../assets/images/backgroundimage1.jpg';
import eventimage from '../assets/images/slide_8.jpg';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../assets/images/profilePhoto.jpeg';
import crowd from '../assets/images/people.png';
import duration from '../assets/images/hourglass.png';
import eventtype from '../assets/images/eventtype.png';
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'
import {Form, Container} from 'react-bootstrap';


import Footer from '../components/common/Footer';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays,faClock} from '@fortawesome/free-solid-svg-icons'
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
      const res = await fetch('http://localhost:8080/event/viewEventForHome')

      const data = await res.json();
        setEventList(data);
      };
     getPendingRequest();

     console.log(eventList)

  }, []);
  





  const divCount = eventList.length;
  const divElements = [];
  console.log(eventList)
 

  //Using a for loop to generate the <div> tags
  for (let i = 0; i < divCount; i++) {

  console.log(eventList[i]['eventName']);
  
    
    divElements.push(<div key={i} className="requestContainerForEvent">
      <img src={profileImage} className="profile"></img>
      <div className="eventDetails">
        <h5>{eventList[i]['organizerName']}</h5>
        
        <p class="eventType1"><img src={eventtype} className="EventIconPendingRequest1"></img>{eventList[i]['eventName']}</p>
            <p class="eventDate1"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest1"/>{eventList[i]['date']}</p>
            <p class="venue1"><FontAwesomeIcon icon={faClock} id="LocationIconPendingRequest1"/>{eventList[i]['startTime']}</p>
            <p class="eventType2"><img src={duration} className="EventIconPendingRequest2"></img>{eventList[i]['duration']}</p>
            <p class="eventDate2"><img src={crowd} className="CalenderIconPendingRequest2"></img>{eventList[i]['crowd']}</p>
            <p class="venue2"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest2"/>{eventList[i]['place']}</p>
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
                     <div className='eventTableContainerView'>
                     {divElements}
                     </div>
                  

                </div>

            </div>
            

      </div>
    </div>
  )
}
