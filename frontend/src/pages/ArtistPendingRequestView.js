import React,{useState, useEffect,useRef} from 'react';
import { Link,useParams, useNavigate } from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistPendingRequests.css'
import Button from 'react-bootstrap/Button';

import profileImage from '../assets/images/profilePhoto.jpeg';
import crowd from '../assets/images/people.png';
import duration from '../assets/images/hourglass.png';
import eventtype from '../assets/images/eventtype.png';
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'
import CircularProgress from '@mui/material/CircularProgress';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays,faClock} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistPendingRequests() {

  const { id } = useParams();

  const [event, setEvent] = useState([]);
  const mmid=localStorage.getItem('mmid');

  const [expand,setExpandedSideBar] = useState(true)
  let navigate = useNavigate();
  const [showRejectedReason,setShowRejectedReason] =useState(false);
  const [rejectReason,setRejectReason]=useState(null);
  const BASE_URL = "http://localhost:8080";

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


  const handleReject = () => {
    setShowRejectedReason(true);
   
  
    
  };

  const handleRejectAndAccept = () => {
    if(rejectReason!=null){
       console.log(rejectReason)
       console.log(mmid)
       console.log(id)
      
      fetch(`http://localhost:8080/requestMusicMember/updateReason/${rejectReason}/${mmid}/${id}`,{
        method:"PUT",
      
        
      }).then(()=>{
      
       
      setShowRejectedReason(false);
      loadPendingRequest();});

    }
   
  
    
  };
  const handleCloseModalAndAccept = () => {
    setShowRejectedReason(false);

   
  
    
  };



  const loadInvoice=(id,mmid)=>{
    navigate(`/artist/invoice/${id}/${mmid}`);

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

 if(event===null) return <div><CircularProgress color="secondary" /></div>
  console.log(event);
  return (

    
    <div>
      <SideMenuBarArtist>
        

       
        <div >
            <p className='headerDashboard'>Pending Requests</p>
            <div className={expand ? 'notificationBg':'notificationBg-ex'}>
              <img src={notification} className='notificationIcon' alt='notification'></img>
            </div>
            <div className={expand ? 'homeBg':'homeBg-ex'}>
            <Link to={'/'}>
                <img src={home} alt='homebtn' className='homeIcon'></img>
              </Link>
            </div>
            <div className={expand ? 'logoutBg':'logoutBg-ex'}>
              <img src={logout} alt='logout'className='logout'></img>
              <p className='logoutbtn'>Logout</p>
            </div>
          </div>

        <div className="requestViewContainer">
        
            <img src={`${BASE_URL}/postData/uploads/image/${event["organizerImage"]}`} className="profileView1"></img>
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
            

            <button className="priorbookingsBtn" onClick={()=>loadPriorBooking(mmid,event['orgId'],event['eventId'])}>Prior Bookings</button>
            <button className="myEventsBtn" onClick={()=>loadMyEventsOn(mmid,event['date'],event['eventId'])}>My Events</button>
            <button className="acceptBtn" onClick={()=>loadInvoice(event['eventId'],mmid)}>Accept</button>
            <button className="rejectBtn" onClick={()=>handleReject()}>Reject</button>
        </div>


         

                                
        {showRejectedReason && (
                                    <div className="complaint-add-success-popup blur-background" style={{ fontFamily: 'MyCustomFont1' }}>

                                        <div className="complaint-add-success-popup-content">
                                           
                                            <p className="complaint-add-success-para_for_request_acception" id="reasonDes">Enter Your Reason</p>
                                            <input type='text' className='inputReason' onChange={(e)=>setRejectReason(e.target.value)}></input>
                                          
                                            <Button type='submit' className='RequestacceptBtn' onClick={handleRejectAndAccept}>
                                        Submit
                                    </Button>
                                            <Button className='RequestCloseBtn' onClick={handleCloseModalAndAccept}>
                                        Cancel
                                    </Button>
                                        </div>


                                    </div>
                                )}
       
        </SideMenuBarArtist>
        
    </div>
  )
}

