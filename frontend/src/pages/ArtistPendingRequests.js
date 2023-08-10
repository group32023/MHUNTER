/* eslint-disable react/jsx-no-undef */
import React,{useState, useEffect,useRef} from 'react';
import { useNavigate} from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistDashboard.css'
import '../assets/css/artistPendingRequests.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';
import eventType from '../assets/images/eventtype.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistPendingRequests() {

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    // Fetch the data from the Java backend
    fetch('http://localhost:8080/requestMusicMember/pendingRequest/101')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
     
      .then((data) => {
        setEventList(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });

      console.log(eventList);

  }, []);

  let navigate = useNavigate();

  const load=(id)=>{
    navigate(`/artist/PendingRequestView/${id}`);

  }


  const divCount = eventList.length;
  const divElements = [];
 

  //Using a for loop to generate the <div> tags
  for (let i = 0; i < divCount; i++) {

    var eventID=eventList[i]['eventid'];
    
    divElements.push(<div key={i} className="requestContainer">
      <img src={profileImage} className="profile"></img>
      <div className="eventDetails">
        <h4>W.R.A.Kavinda Perera</h4>
        <p class="eventType"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest"/>{eventList[i]['event_name']}</p>
      <p class="eventDate"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest"/>{eventList[i]['date']}</p>
        <p class="venue"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest"/> {eventList[i]['town']}</p>
      </div>
     
   
      <button className="viewBtn" onClick={()=>load(eventID)}>View</button>
    
      
   
  </div>
  );
   
  }

  
 if(eventList.length===0) return <div>Loading....................</div>

  return (

   
    
    <div className='MainContainer'>
        <div className='artistSideBar'>
            <SideMenuBarArtist></SideMenuBarArtist>
            <h3 className='headerDashboard'>Pending Requests</h3>
            <div className='notificationBg'></div>
            <div className='homeBg'></div>
            <div className='logoutBg'></div>
        </div>

  
        {/* {eventList.map((item, index) => (
      <li key={index}>{item}</li>
    ))} */}
        
        <div>{divElements}</div>;
        
        
    </div>
  )
}

