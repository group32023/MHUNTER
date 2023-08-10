import React from 'react'
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import { useState,useEffect } from 'react'
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import '../assets/css/artistEvent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import profileImage from '../assets/images/profilePhoto.jpeg';
import '../assets/css/artistPendingRequests.css'
import { Button } from 'react-bootstrap'
import eventType from '../assets/images/eventtype.png'

export default function ArtistEvent() {
  const [expand,setExpandedSideBar] = useState(true)
  const [data,setData] = useState([])

  const divCount = 4;
  const divElements = [];

  const handle = ()=>{
    fetch("http://localhost:8080/requestMusicMember/viewAllEvents/758463").then((res)=>res.json()).then((result)=>{
      const newItem = result.map(item=>(
        <div  className="requestContainer">
      <img src={profileImage} className="profile"></img>
      <div className="eventDetails">
        <h4>{item.organizerName}</h4>
        <p class="artistEventType"><img src={eventType} alt=''className='artistEventTypeImg'></img>{item.eventType}</p>
        <p class="eventDate"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest"/>{item.date}</p>
        <p class="venue"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest"/>{item.place}</p>
      </div>
      <Button className="viewBtn">View</Button>
   
  </div>
      ))
     setData(newItem) 
    })
    
  }
  console.log(data)
  useEffect(()=>{
    handle();
  },[])

  // Using a for loop to generate the <div> tags
  // for (let i = 0; i < divCount; i++) {
  //   divElements.push(<div key={i} className="requestContainer">
  //     <img src={profileImage} className="profile"></img>
  //     <div className="eventDetails">
  //       <h4>W.R.A.Kavinda Perera</h4>
  //       <p class="artistEventType"><img src={eventType} alt=''className='artistEventTypeImg'></img>Birthday Party</p>
  //       <p class="eventDate"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest"/>2023.11.02</p>
  //       <p class="venue"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest"/> Colombo 05</p>
  //     </div>
  //     <Button className="viewBtn">View</Button>
   
  // </div>);
  // }
  return (
    <div>
        <div className='mainArtistDashboard'>
            <SideMenuBarArtist></SideMenuBarArtist>
        </div>
        <div className='mainEventContainer'>
        <p className='headerDashboard'>Events</p>
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
            <div>{data}</div>
        </div>
    </div>
  )
}
