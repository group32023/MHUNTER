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

import empty from '../assets/images/empty(1).png'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Footer from '../components/common/Footer';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays,faClock} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


import '../assets/css/home.css'
import '../assets/css/event.css'







export default function ArtistPendingRequests() {



const [expand,setExpandedSideBar] = useState(true)
const [searchInput, setSearchInput] = useState('');
  const [eventList, setEventList] = useState([]);
  const [currentPage, setCurrentPage] =useState(1);
  const [linePerPage, setLinePerPage] = useState(4);
  const [page,setPage] = useState(1);
  const BASE_URL = "http://localhost:8080";
  const noOfLinePerPage = 4;
  useEffect(() => {
    // Fetch the data from the Java backend
    const getPendingRequest = async () =>{
      const res = await fetch('http://localhost:8080/event/getAll')

      const data = await res.json();
        setEventList(data);
      };
     getPendingRequest();

     console.log(eventList)

  }, []);


  const filteredEvents = eventList.filter((eventList) =>
  eventList.event_name.toLowerCase().includes(searchInput.toLowerCase()) );
  

  function setPagination(){
    let noOfLine =1
    let displayedData = []
    if(filteredEvents.length>0){
      if(filteredEvents.length < noOfLinePerPage*page){
        noOfLine = filteredEvents.length
      }
      else{
        noOfLine =  noOfLinePerPage*page
      }
      for (let i = noOfLinePerPage*(page-1); i < noOfLine; i++) {
        displayedData.push(filteredEvents[i]);
        
      }
      return displayedData
    }
    else{
      
      return displayedData 
    }
    
  }

  const handleChange= (event,value)=>{
    setPage(value)
  }

  // const divCount = eventList.length;
  // const divElements = [];
 
  // console.log(eventList)
  // //Using a for loop to generate the <div> tags
  // for (let i = 0; i < divCount; i++) {

  // console.log(eventList[i]['eventName']);
  
    
  //   divElements.push(<div key={i} className="requestContainerForEvent">
  //     <img src={profileImage} className="profile3"></img>
  //     <div className="eventDetails">
  //       <h5>{eventList[i]['organizerName']}</h5>
  //       <p class="eventType7"><img src={eventtype} className="EventIconPendingRequest1"></img>{eventList[i]['event_name']}</p>
  //           <p class="eventDate7"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest1"/>{eventList[i]['date']}</p>
  //           <p class="venue7"><FontAwesomeIcon icon={faClock} id="LocationIconPendingRequest1"/>{eventList[i]['start_time']}</p>
  //           <p class="eventDate8"><img src={crowd} className="CalenderIconPendingRequest2"></img>{eventList[i]['crowd']}</p>
  //           <p class="venue8"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest2"/>{eventList[i]['town']}</p>
  //     </div>
     
   
    
      
   
  // </div>

  // );
  // }







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
             
                <div className='eventcontainer1'>

                 

                    <Container>
                      <Form.Control
                        className="smaller-input"
                        name="foo" id="statusInput"
                        placeholder="Enter Event Detail Here"  value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                      />
                    </Container>
                     <div className='eventTableContainerView'>
                     {setPagination().map((eventList) => 
                     <div className="requestContainerForEvent">
                              <img src={profileImage} className="profile3"></img>
                              <div className="eventDetails">
                                <h5>{eventList['organizerName']}</h5>
                                <p class="eventType7"><img src={eventtype} className="EventIconPendingRequest1"></img>{eventList['event_name']}</p>
                                    <p class="eventDate7"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest1"/>{eventList['date']}</p>
                                    <p class="venue7"><FontAwesomeIcon icon={faClock} id="LocationIconPendingRequest1"/>{eventList['start_time']}</p>
                                    <p class="eventDate8"><img src={crowd} className="CalenderIconPendingRequest2"></img>{eventList['crowd']}</p>
                                    <p class="venue8"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest2"/>{eventList['town']}</p>
                              </div>
     
   
    
      
   
  </div>)}
                          
                     </div>
                  

                </div>
               <div className='paginationForEventHome'>
                  <div className='artistEventPagination'>
                  <Stack spacing={2}>
                    <Pagination count={(Math.round(filteredEvents.length/noOfLinePerPage))} color="secondary" page={page} onChange={handleChange} />
                  </Stack>
                </div>
              </div>

            </div>
            
      
           {/* pagination */}
           

              
                 
         <div className='footerForHomeevent'>

             <Footer></Footer>

         </div>


                    </div>
                  </div>
                )
              }
