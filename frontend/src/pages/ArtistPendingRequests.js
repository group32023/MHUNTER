/* eslint-disable react/jsx-no-undef */
import React,{useState, useEffect,useRef} from 'react';
import { useNavigate} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
//import '../assets/css/artistDashboard.css'
import '../assets/css/artistPendingRequests.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';
import eventType from '../assets/images/eventtype.png'
import Pagination from '../components/common/Pagination';
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import eventtype from '../assets/images/eventtype.png';
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistPendingRequests() {

  const [expand,setExpandedSideBar] = useState(true)

  const [eventList, setEventList] = useState([]);
 

  useEffect(() => {
    const mmId = localStorage.getItem('mmid');
    // if(mmId){
    // // Fetch the data from the Java backend
    // const getPendingRequest = async () =>{
    //   const res = await fetch(`http://localhost:8080/requestMusicMember/pendingRequest/${mmId}`)

    //   const data = await res.json();
    //     setEventList(data);
    //   };
    //  getPendingRequest();


    // }

    fetch(`http://localhost:8080/requestMusicMember/pendingRequest/${mmId}`)
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
  
    
    divElements.push(<div key={i} className="requestContainer">
      <img src={profileImage} className="profile"></img>
      <div className="eventDetails">
        <h5>{eventList[i]['organizerName']}</h5>
        
        <p class="eventType"><img src={eventtype} className="EventIconPendingRequest1"></img>{eventList[i]['eventName']}</p>
      <p class="eventDate"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest"/>{eventList[i]['date']}</p>
        <p class="venue"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest"/> {eventList[i]['place']}</p>
      </div>
     
   
      <button className="viewBtn" onClick={()=>load(eventList[i]['eventId'])}>View</button>
    
      
   
  </div>

  );
   
  }

  const handlePageClick = (data)=>{
    console.log(data.selected);
  }

  
 if(eventList.length===0) return <div className='progressBar'><CircularProgress color="secondary" /></div>

  return (

   
    
    <div >
    <SideMenuBarArtist >
    <div className='MainContainer'>
    
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

     
      
       
        {divElements}
        </div>
        

     
            
      
      </SideMenuBarArtist>
    </div>
  )
}

