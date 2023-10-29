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
import { Link, useNavigate } from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import empty from '../assets/images/empty(1).png'


export default function ArtistEvent() {
  const [expand,setExpandedSideBar] = useState(true)
  const [getFilterData,setFilterData] = useState("")
  const [data,setData] = useState([])
  const [line,setLine] = useState([])
  const [page,setPage] = useState(1)
  const noOfLinePerPage = 4

  const divCount = 4;
  const divElements = [];
  let navigate = useNavigate()

  // direct to the view page
  const directions =(eventId)=>{
    navigate(`/artist/EventSpecific/${eventId}`)
  }

  // get the all data form backend
  const handle = ()=>{
    fetch(`http://localhost:8080/requestMusicMember/viewAllEvents/758463?filterValue=${getFilterData}`).then((res)=>res.json()).then((result)=>{
      if(result.length>0){
        const newItem = result.map(item=>(
          <div  className="requestContainerArtistEvent">
        <img src={profileImage} className="profileArtistEvent"></img>
        <div className="eventDetailsArtistEvent">
          <h4>{item.organizerName}</h4>
          <p class="artistEventTypeArtistEvent"><img src={eventType} alt=''className='artistEventTypeImg'></img>{item.eventType}</p>
          <p class="eventDateArtistEvent"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest"/>{item.date}</p>
          <p class="venueArtistEvent"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest"/>{item.place}</p>
        </div>
        <Button className="viewBtnArtistEvent" onClick={()=>directions(item.eventId)}>View</Button>
     
    </div>
        ))
        setData(newItem) 
      }
     
    })
    
  }
 
  
  useEffect(()=>{
    handle();
  },[])

  // setup the filter
  function setFilter(){
    handle();
  }


// clear the setFilterData state
  function clearState(){
    setFilterData("")
  }

  // set the current page
  const handleChange= (event,value)=>{
    setPage(value)
  }

// setup the pagination
  function setPagination(){
    let noOfLine =1
    let displayedData = []
    if(data.length>0){
      if(data.length < noOfLinePerPage*page){
        noOfLine = data.length
      }
      else{
        noOfLine =  noOfLinePerPage*page
      }
      for (let i = noOfLinePerPage*(page-1); i < noOfLine; i++) {
        displayedData.push(data[i]);
        
      }
      return displayedData
    }
    else{
      
      return displayedData 
    }
    
  }
  

  if(data===null) return <div className='progressBar'><CircularProgress color="secondary" /></div>
  

  return (
    <div>
            <SideMenuBarArtist>
        <p className='headerDashboard'>Events</p>
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
            <input className='artistEventSearchBar' placeholder='Search by keyword' value={getFilterData} onChange={(e)=>{setFilterData(e.target.value);setFilter()}}></input>
            {getFilterData.length > 0 ? 
            <FontAwesomeIcon icon="fa-solid fa-circle-xmark" className='artistEventSearchBarIcon' onClick={clearState}/>
            :<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='artistEventSearchBarIcon'/>}

{/* pagination */}
            <div>{setPagination().map((item) => item)}</div>
            {(data.length ==0)?<><img src={empty} className='empty'></img><span className='emptyContent'>it's empty in here.</span></>:undefined}

            <div className='artistEventPagination'>
              <Stack spacing={2}>
                <Pagination count={(Math.round(data.length/noOfLinePerPage))} color="secondary" page={page} onChange={handleChange} />
              </Stack>
            </div>
            
       
        </SideMenuBarArtist>
    </div>
  )
}
