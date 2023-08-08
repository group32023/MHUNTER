import React, { useState } from 'react'
import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator'
import '../../assets/css/event.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import band from '../../assets/images/band.jpg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);


const events = [
    {
      eventid: 1,
      event_name: 'Musical Concert',
      location: 'Example Place, Example Town',
      date: 'June 14 2023',
      start_time: '18:00',
      image: band
    },
    {
      eventid: 2,
      event_name: 'Art Exhibition',
      location: 'Art Gallery, Artville',
      date: 'June 14 2023',
      start_time: '15:00',
      image: band
    },
    {
      eventid: 3,
      event_name: 'Food Festival',
      location: 'Food Park, Tastyville',
      date: 'June 14 2023',
      start_time: '12:00',
      image: band
    },
    {
        eventid: 4,
        event_name: 'Food Festival',
        location: 'Food Park, Tastyville',
        date: 'June 14 2023',
        start_time: '12:00',
        image: band
      }
  ];
  
  const EventContainer = () => {
    return (
    <div className='main-container'>
        <div className='side-bar'>
            <SideMenuBarModerator />
        </div>
        <div className='body-container'>
            {/*header icon*/}
            <div className='header-admin'>

                <div className='header-title'>
                    <h1>Events</h1>
                </div>
                </div>
      <div className="row">
        {events.map(event => (
          <div className="col-md-4" key={event.eventid}>
                  <Link to={`/moderator/event/eventDetails`} className="event-link">

            <div className="event-card">
            <img
  src={event.image}
  alt={`Event ${event.eventid}`}
  style={{ width: '450px', height: '150px', marginBottom: '20px', borderRadius: '30px' }}
/>            <div className="event-details">
              <div><h3>{event.event_name}</h3>
              <p>{event.location}</p>
              <div className="start-time">Start Time {event.start_time}</div></div>
              <div className='date-container'>
              <FontAwesomeIcon icon="calendar" style={{ color: "#7643D2", fontSize: '28px' }} />
              <div className="start-date">   {event.date}</div>
        
              </div>
              </div>
            </div></Link>
          </div>
        ))}
      </div>
    </div>
                

            </div>
            

  )
}



export default EventContainer;
