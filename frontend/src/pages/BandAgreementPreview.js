/* eslint-disable react/jsx-no-undef */
import React,{useState, useEffect,useRef} from 'react';
import { useNavigate} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
//import '../assets/css/artistDashboard.css'
import '../assets/css/bandAgreementPreview.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';
import eventType from '../assets/images/eventtype.png'
import Pagination from '../components/common/Pagination';
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'
import logo from '../assets/images/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function BandAgreementPreview() {

  // const [expand,setExpandedSideBar] = useState(true)

  // const [eventList, setEventList] = useState([]);
  // const [currentPage, setCurrentPage] =useState(1);
  // const [linePerPage, setLinePerPage] = useState(4);

  // useEffect(() => {
  //   // Fetch the data from the Java backend
  //   const getPendingRequest = async () =>{
  //     const res = await fetch('http://localhost:8080/requestMusicMember/pendingRequest/758463')

  //     const data = await res.json();
  //       setEventList(data);
  //     };
  //    getPendingRequest();

     

  // }, []);
  

  // const lastLineIndex = currentPage * linePerPage;
  // const firstLineIndex = lastLineIndex - linePerPage;
  // const eventList1 = eventList.slice(firstLineIndex,lastLineIndex)

  // let navigate = useNavigate();

  // const load=(id)=>{
  //   navigate(`/artist/PendingRequestView/${id}`);

  // }

  // console.log(eventList1);

  // const divCount = eventList1.length;
  // const divElements = [];
 

  // //Using a for loop to generate the <div> tags
  // for (let i = 0; i < divCount; i++) {

  // console.log(eventList1[i]['eventName']);
  
    
  //   divElements.push(<div key={i} className="requestContainer">
  //     <img src={profileImage} className="profile"></img>
  //     <div className="eventDetails">
  //       <h5>{eventList1[i]['organizerName']}</h5>
        
  //       <p class="eventType"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest"/>{eventList1[i]['eventName']}</p>
  //     <p class="eventDate"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest"/>{eventList1[i]['date']}</p>
  //       <p class="venue"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest"/> {eventList1[i]['place']}</p>
  //     </div>
     
   
  //     <button className="viewBtn" onClick={()=>load(eventList1[i]['eventId'])}>View</button>
    
      
   
  // </div>

  // );
   
  

  

  
 

  return (

   
    
    <div >
    <div className='previewContainerBody'>
    <button className='previousGo'>{'<'}</button>
        <div className='previewContainer'>
        <img src={logo} alt='logo' className='logo'></img>
              <p className='bandName'>FlashBack</p>
              <p className='bandAddress'>Negambo, Colombo 05</p>
              <p className='bandEmail'>flashback@gmail.com</p>
              <hr className='agreementHr'></hr>
              <h3>Agreement</h3>
              <div className='agreementContent'>
              <p className='organizerNamelabel'>Name : </p><p className='organizerName'> W.R.A.S.Kavishka</p>
              <p className='eventNamelabel'>Event : </p><p className='eventName'>Birthday Party</p>
              <p className='eventDatelabel'>Date : </p><p className='eventDate'> 2022-03-25</p>
              <p className='placelabel'>Venue :</p><p className='place'> Matara</p>
              <p className='timelabel'>Time : </p><p className='time'>6.00pm</p>
              <p className='paraContent'>We are delighted to have hired our music band for your event. We expect you to abide by the following rules and regulations during your event.</p>
              <p className='rulesLabel'>Rules & Regulations : </p>
              <p className='additionalRulesLabel'>Additional Rules : </p>
              <p className='additionalRules'>Can not sing Others</p>

              </div>
              <div className='verifyContent'>
              <p className='today'>2023-09-02</p>
               <p className='spaceDate'>..................................</p>
               <p className='dateLabel'>Date</p>
              <p className='spaceSignature'>..................................</p>
              <p className='signature'>Signature</p>
              </div>
        </div>

    </div>
    
    
    
    </div>
  )
}

