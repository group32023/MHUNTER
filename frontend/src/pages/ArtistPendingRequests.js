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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistPendingRequests() {

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

     

  }, []);
  

  const lastLineIndex = currentPage * linePerPage;
  const firstLineIndex = lastLineIndex - linePerPage;
  const eventList1 = eventList.slice(firstLineIndex,lastLineIndex)

  let navigate = useNavigate();

  const load=(id)=>{
    navigate(`/artist/PendingRequestView/${id}`);

  }


  const divCount = eventList1.length;
  const divElements = [];
 

  //Using a for loop to generate the <div> tags
  for (let i = 0; i < divCount; i++) {

 
  
    
    divElements.push(<div key={i} className="requestContainer">
      <img src={profileImage} className="profile"></img>
      <div className="eventDetails">
        <h5>{eventList1[i]['organizerName']}</h5>
        <p class="eventType"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest"/>{eventList1[i]['eventName']}</p>
      <p class="eventDate"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest"/>{eventList1[i]['date']}</p>
        <p class="venue"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest"/> {eventList1[i]['place']}</p>
      </div>
     
   
      <button className="viewBtn" onClick={()=>load(eventList1[i]['eventId'])}>View</button>
    
      
   
  </div>
  );
   
  }

  const handlePageClick = (data)=>{
    console.log(data.selected);
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

     
      
        
        <div>{divElements}</div>;

      <div className='pagination'>
      <Pagination 
                totalLines={eventList.length}
                linesPerPage={linePerPage}
                setCurrentPage={setCurrentPage}
              />
      </div>
            
        
        
    </div>
  )
}

