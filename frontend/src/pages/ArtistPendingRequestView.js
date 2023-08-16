import React,{useState, useEffect,useRef} from 'react';
import { Link,useParams, useNavigate } from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistPendingRequests.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';
import crowd from '../assets/images/people.png';
import duration from '../assets/images/hourglass.png';
import eventtype from '../assets/images/eventtype.png';
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays,faClock} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistPendingRequests() {

  const { id } = useParams();

  const [event, setEvent] = useState([]);
  
  console.log(id);

  const [expand,setExpandedSideBar] = useState(true)
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
    navigate(`/artist/invoice/${id}`);

  }

  const loadPriorBooking=(mmid, orgId, eventId)=>{
    navigate(`/artist/priorbooking/${mmid}/${orgId}/${eventId}`);

  }

  const loadMyEventsOn=(mmid,date,eventId)=>{
    navigate(`/artist/eventsOn/${mmid}/${date}/${eventId}`);

  }

const loadPendingRequest=()=>{
  navigate('/artist/PendingRequests');
}
 
 //var eventID =event[0]['eventid'];

 if(event===null) return <div>Loading....................</div>
 

  return (

    
    <div>
        <div className='MainContainer'>

       <SideMenuBarArtist setExpandedSideBar={setExpandedSideBar}></SideMenuBarArtist>
        <div className='artistSideBarOne' id='artistSideBarOne'>
            <p className='headerDashboard'>Pending Requests</p>
            <div className={expand ? 'notificationBg':'notificationBg-ex'}>
              <img src={notification} className='notificationIcon' alt='notification'></img>
            </div>
            <div className={expand ? 'homeBg':'homeBg-ex'}>
              <img src={home} alt='homebtn' className='homeIcon'></img>
            </div>
            <div className={expand ? 'logoutBg':'logoutBg-ex'}>
              <img src={logout} alt='logout'className='logout'></img>
              <p className='logoutbtn'>Logout</p>
            </div>
          </div>

        <div className="requestViewContainer">
        
            <img src={profileImage} className="profileView1"></img>
            <p className='paraRequestName'>Requested By : </p>
            <h4>{event['organizerName']}</h4>

            <div className='eventDetailsContainer'>
            <p class="eventType1"><img src={eventtype} className="EventIconPendingRequest1"></img>Event Name : {event['eventName']}</p>
            <p class="eventDate1"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest1"/>Date : {event['date']}</p>
            <p class="venue1"><FontAwesomeIcon icon={faClock} id="LocationIconPendingRequest1"/> Time : {event['startTime']}</p>
            <p class="eventType2"><img src={duration} className="EventIconPendingRequest2"></img>Duration : {event['duration']}</p>
            <p class="eventDate2"><img src={crowd} className="CalenderIconPendingRequest2"></img>Crowd : {event['crowd']}</p>
            <p class="venue2"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest2"/>Venue : {event['place']}</p>

            </div>
            

            <button className="priorbookingsBtn" onClick={()=>loadPriorBooking(758463,event['orgId'],event['eventId'])}>Prior Bookings</button>
            <button className="myEventsBtn" onClick={()=>loadMyEventsOn(758463,event['date'],event['eventId'])}>My Events</button>
            <button className="acceptBtn" onClick={()=>loadInvoice(event['eventId'])}>Accept</button>
            <button className="rejectBtn" onClick={()=>loadPendingRequest()}>Reject</button>
        </div>
        
        
      
        </div>

        
    </div>
  )
}

