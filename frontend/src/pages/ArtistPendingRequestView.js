import React,{useState, useEffect,useRef} from 'react';
import { Link,useParams } from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistDashboard.css'
import '../assets/css/artistPendingRequests.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistPendingRequests() {

  const { id } = useParams();

  const [event, setEvent] = useState([]);
  

  useEffect(() => {
    // Fetch the data from the Java backend
    fetch(`http://localhost:8080/event/viewSpecificEvent/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
     
      .then((data) => {
        setEvent(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
      console.log(event[0]);

  }, []);


 //var eventID =event[0]['eventid'];
 

  return (

    
    <div>
        <div className='artistSideBar'>
            <SideMenuBarArtist></SideMenuBarArtist>
            <h3 className='headerDashboard'>Pending Requests</h3>
            <div className='notificationBg'></div>
            <div className='homeBg'></div>
            <div className='logoutBg'></div>
        </div>

        <div className="requestViewContainer">
        
            <img src={profileImage} className="profileView1"></img>
            <p className='paraRequestName'>Requested By : </p>
            <h4>W.R.A.Kavinda Perera</h4>

            {/* <div className='eventDetailsContainer'>
            <p class="eventType1"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest1"/>{event[0]['event_name']}</p>
            <p class="eventDate1"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest1"/>{event[0]['date']}</p>
            <p class="venue1"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest1"/> {event[0]['start_time']}</p>
            <p class="eventType2"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest2"/>{event[0]['end_time']-event[0]['start_time']}</p>
            <p class="eventDate2"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest2"/>{event[0]['crowd']}</p>
            <p class="venue2"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest2"/> {event[0]['location']}</p>

            </div> */}

            {/* <MDBBtn className="priorbookingsBtn">Prior Bookings</MDBBtn>
            <MDBBtn className="myEventsBtn">My Events</MDBBtn>

           
             {/* <Link to={ `/artist/pendingRequest/confirmRequest/${eventID}`}>
               <MDBBtn className="acceptBtn">Accept</MDBBtn>
               </Link> */}
            {/* <MDBBtn className="rejectBtn">Reject</MDBBtn> */}
        </div>
        
        
      
        
        
    </div>
  )
}

