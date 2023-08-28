import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import calendarEventPopupPost from '../../assets/images/eventPost.jpg'
import '../../assets/css/calenderPopup.css'
import calendarEvent from '../../assets/images/calendar(1).png'
import stopWatch from '../../assets/images/stopwatch.png'
import location from '../../assets/images/location(1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CalendarEventPopup({date}) {
  const [getEventDetails,setEventDetails] = useState([])
  const [getPopup,setPopup] = useState([])
  const [getCurrentEvent, setCurrentEvent] = useState(0)

  // get event date 'yyyy-mm-dd' format
  function getDate(date){
    const day = new Date(date)
    const year = day.getFullYear()
    const month = String(day.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed.
    const d = String(day.getDate()).padStart(2, '0');

    return `${year}-${month}-${d}`
  }
  
  const eventDate = getDate(date)

  function nextEvent(){
    if(getCurrentEvent >= 0 && getCurrentEvent < getPopup.length-1){
      setCurrentEvent(getCurrentEvent+1)
      console.log('awaa')
    }
    else {
      setCurrentEvent(0)
      console.log('awa2')
    }
  }

  function prevEvent(){
    if(getCurrentEvent > 0 && getCurrentEvent < getPopup.length){
      setCurrentEvent(getCurrentEvent-1)
      console.log('awa3')
    }
    else{
      setCurrentEvent(0)
      console.log('awa4')
    }
  }

  fetch(`http://localhost:8080/event/findEvent/${eventDate}`).then((res)=>res.json()).then((result)=>{
    const newPopup = result.map(item=>(
      <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={calendarEventPopupPost}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.event_name}
          <hr></hr>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <img src={calendarEvent} alt='calendarEvent' className='calendarEventPopupImage'/>
          <span className='calendarEventPopupDate'>{item.date}</span>
          <img src={stopWatch} alt='calendarEvent' className='calendarEventPopupStopWatch'/>
          <span className='calendarEventPopupTime'>{item.start_time}</span>
          <img src={location} alt='calendarEvent' className='calendarEventPopupLocationImg'/>
          <span className='calendarEventPopupLocation'>{item.town}</span>
        </Typography>
        {getPopup.length-1 > 0 ? 
          <>
            {getCurrentEvent >= 0 && getCurrentEvent < getPopup.length-1 ?
              <>
                <Button className='popupPrevBtn' onClick={nextEvent}>
                    <FontAwesomeIcon icon="fa-solid fa-greater-than" />
                </Button>
              </>:undefined
            }
            {getCurrentEvent < getPopup.length && getCurrentEvent > 0 ?
            <>
              <Button className='popupNextBtn' onClick={prevEvent}>
                  <FontAwesomeIcon icon="fa-solid fa-less-than" />
              </Button>
            </> : undefined
            }
          </> 
        : undefined}
        
      </CardContent>
    </CardActionArea>
  </Card>
    ));
    setPopup(newPopup)
  })  

  
  return (
    <>
    {getPopup[getCurrentEvent]}
    
    </>
    
  )
}
