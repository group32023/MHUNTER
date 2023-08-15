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
import { useNavigate } from 'react-router-dom'

export default function ArtistEvent() {
  const [expand,setExpandedSideBar] = useState(true)
  const [data,setData] = useState([])

  const divCount = 4;
  const divElements = [];
  let navigate = useNavigate()

  const directions =(eventId)=>{
    navigate(`/artist/EventSpecific/${eventId}`)
  }

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
      <Button className="viewBtn" onClick={()=>directions(item.eventId)}>View</Button>
   
  </div>
      ))
     setData(newItem) 
    })
    
  }
  console.log(data)
  useEffect(()=>{
    handle();
  },[])

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
