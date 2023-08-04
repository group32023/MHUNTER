import React,{useState, useEffect,useRef} from 'react';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistDashboard.css'
import '../assets/css/artistPendingRequests.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistPendingRequests() {

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

            <div className='eventDetailsContainer'>
            <p class="eventType1"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest1"/>Birthday Party</p>
            <p class="eventDate1"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest1"/>2023.11.02</p>
            <p class="venue1"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest1"/> Colombo 05</p>
            <p class="eventType2"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest2"/>Birthday Party</p>
            <p class="eventDate2"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest2"/>2023.11.02</p>
            <p class="venue2"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest2"/> Colombo 05</p>

            </div>

            {/* <MDBBtn className="priorbookingsBtn">Prior Bookings</MDBBtn>
            <MDBBtn className="myEventsBtn">My Events</MDBBtn>
            <MDBBtn className="acceptBtn">Accept</MDBBtn>
            <MDBBtn className="rejectBtn">Reject</MDBBtn> */}
        </div>
        
        
       
        
        
    </div>
  )
}

