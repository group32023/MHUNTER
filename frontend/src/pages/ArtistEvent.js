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
import Topbar from '../components/common/Topbar'


export default function ArtistEvent() {
  const [expand,setExpandedSideBar] = useState(true)
  const [getFilterData,setFilterData] = useState("")
  const [data,setData] = useState([])
  const [line,setLine] = useState([])
  const [page,setPage] = useState(1)
  const noOfLinePerPage = 4
  const BASE_URL = "http://localhost:8080";

  const divCount = 4;
  const divElements = [];
  const extractloc = (location) => {

    const parts = location.split(',');
    const placeName = parts[0];
    const town = parts[parts.length - 2];
    const stringPart = town.replace(/\d+/g, '');
    return `${stringPart}`;
}

  let navigate = useNavigate()

  // direct to the view page
  const directions =(eventId)=>{
    navigate(`/artist/EventSpecific/${eventId}`)
  }

  // get the all data form backend
  const handle = ()=>{
    const mmId = localStorage.getItem('mmid');
    if(mmId){
    fetch(`http://localhost:8080/requestMusicMember/viewAllEvents/${mmId}?filterValue=${getFilterData}`).then((res)=>res.json()).then((result)=>{
      console.log(result);
      if(result.length>0){
        const newItem = result.map(item=>(
          <div key={item.eventId}  className="requestContainerArtistEvent">
        <img src={`${BASE_URL}/postData/uploads/image/${item.organizerImage}`} className="profileArtistEvent"></img>
        <div className="eventDetailsArtistEvent">
          <h4>{item.organizerName}</h4>
          <p class="artistEventTypeArtistEvent"><img src={eventType} alt=''className='artistEventTypeImg'></img>{item.eventType}</p>
          <p class="eventDateArtistEvent"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest"/>{item.date}</p>
          <p class="venueArtistEvent"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest"/>{extractloc(item.place)}</p>
        </div>
        <Button className="viewBtnArtistEvent" onClick={()=>directions(item.eventId)}>View</Button>
     
    </div>
        ))
        setData(newItem) 
      }
     
    })}
    
  }
 console.log(data)
  
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
            <Topbar></Topbar>
            <input className='artistEventSearchBar' placeholder='Search by keyword' value={getFilterData} onChange={(e)=>{setFilterData(e.target.value);setFilter()}}></input>
            {getFilterData.length > 0 ? 
            <FontAwesomeIcon icon="fa-solid fa-circle-xmark" className='artistEventSearchBarIcon' onClick={clearState}/>
            :<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='artistEventSearchBarIcon'/>}

{/* pagination */}
            <div>{setPagination().map((item) => item)}</div>
            {(data.length ==0)?<><img src={empty} className='empty'></img><span className='emptyContent-artistEvent'>it's empty in here.</span></>:undefined}

            <div className='artistEventPagination'>
              <Stack spacing={2}>
                <Pagination count={(Math.round(data.length/noOfLinePerPage))} color="secondary" page={page} onChange={handleChange} />
              </Stack>
            </div>
            
       
        </SideMenuBarArtist>
    </div>
  )
}
