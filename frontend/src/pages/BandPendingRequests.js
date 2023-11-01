/* eslint-disable react/jsx-no-undef */
import React,{useState, useEffect,useRef} from 'react';
import { useNavigate} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import SideMenuBarBand from '../components/common/SideMenuBar/SideMenuBarBand'
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import eventtype from '../assets/images/eventtype.png';

import empty from '../assets/images/empty(1).png'

export default function ArtistPendingRequests() {

  const [expand,setExpandedSideBar] = useState(true)

  const [eventList, setEventList] = useState([]);
  const [currentPage, setCurrentPage] =useState(1);
  const [linePerPage, setLinePerPage] = useState(4);
  const BASE_URL = "http://localhost:8080";

  const mmid=localStorage.getItem('mmid');
  useEffect(() => {
    // Fetch the data from the Java backend
    const getPendingRequest = async () =>{
      const res = await fetch(`http://localhost:8080/requestMusicMember/pendingRequest/758473`)

      const data = await res.json();
        setEventList(data);
      };
     getPendingRequest();

     

  }, []);
  

  const lastLineIndex = currentPage * linePerPage;
  const firstLineIndex = lastLineIndex - linePerPage;
  const eventList1 = eventList.slice(firstLineIndex,lastLineIndex)

  let navigate = useNavigate();

  const load=(id)=>{
    navigate(`/band/PendingRequestView/${id}`);

  }

  console.log(eventList1);

  const divCount = eventList1.length;
  const divElements = [];
 

  //Using a for loop to generate the <div> tags
  for (let i = 0; i < divCount; i++) {

  console.log(eventList1[i]['eventName']);
  
    
    divElements.push(<div key={i} className="requestContainer">
      <img src={`${BASE_URL}/postData/uploads/image/${eventList[i]['organizerImage']}`} className="profile1"></img>
      <div className="eventDetails">
        <h5>{eventList1[i]['organizerName']}</h5>
        
        <p class="eventType"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest"/>{eventList1[i]['eventName']}</p>
      <p class="eventDate"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest"/>{eventList1[i]['date']}</p>
        <p class="venue"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest"/> {eventList1[i]['place']}</p>
      </div>
     
   
      <button className="viewBtn1" onClick={()=>load(eventList1[i]['eventId'])}>View</button>
    
      
   
  </div>

  );
   
  }

  const handlePageClick = (data)=>{
    console.log(data.selected);
  }

  

  return (

   
    
    <div >
    <SideMenuBarBand >
  
    
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

     
      
        
        {divElements}
        <div className='emptyForPendingRequest'>
        {(divElements.length ===0)?<><img src={empty} className='empty-img'></img><span className='emptyContent-report'>it's empty in here.</span></>:undefined}

        </div>

      {/* <div className='pagination'>
      <Pagination 
                totalLines={eventList.length}
                linesPerPage={linePerPage}
                setCurrentPage={setCurrentPage}
              />
      </div> */}
            
      
      </SideMenuBarBand>
    </div>
  )
}

