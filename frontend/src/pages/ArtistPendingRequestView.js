import React,{useState, useEffect,useRef} from 'react';
import { Link,useParams, useNavigate } from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistPendingRequests.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistPendingRequests() {

  const { id } = useParams();

  const [event, setEvent] = useState([]);
  
  console.log(id);

  let navigate = useNavigate();

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
      //console.log(event[0]);

  }, []);

  const loadInvoice=(id)=>{
    navigate(`/band/invoice/${id}`);

  }

  const loadPriorBooking=(mmid, orgId)=>{
    navigate(`/artist/priorbooking/${mmid}/${orgId}`);

  }

  const loadMyEventsOn=(mmid,date)=>{
    navigate(`/artist/eventsOn/${mmid}/${date}`);

  }


 
 //var eventID =event[0]['eventid'];

 if(event===null) return <div>Loading....................</div>
 

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
            <h4>{event['organizerName']}</h4>

            <div className='eventDetailsContainer'>
            <p class="eventType1"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest1"/>Event Name : {event['eventName']}</p>
            <p class="eventDate1"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest1"/>Date : {event['date']}</p>
            <p class="venue1"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest1"/> Time : {event['startTime']}</p>
            <p class="eventType2"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest2"/>Duration : {event['duration']}</p>
            <p class="eventDate2"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest2"/>Crowd : {event['crowd']}</p>
            <p class="venue2"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest2"/>Venue : {event['place']}</p>

            </div>
            

            <button className="priorbookingsBtn" onClick={()=>loadPriorBooking(101,event['orgId'])}>Prior Bookings</button>
            <button className="myEventsBtn" onClick={()=>loadMyEventsOn(101,event['date'])}>My Events</button>
            <button className="acceptBtn" onClick={()=>loadInvoice(event['eventId'])}>Accept</button>
            <button className="rejectBtn">Reject</button>
        </div>
        
        
      
        
        
    </div>
  )
}

