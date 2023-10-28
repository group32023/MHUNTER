import React from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin'
import '../../assets/css/admin/adminDashboard.css'
import { Link, Route, Routes } from 'react-router-dom';

import AdminDashboard from './AdminDashboard'
import AdminRegistration from './AdminRegistration';
import ProofCheck from './ProofCheck';
import AllUserDetails from './AllUserDetails';
import ViewUserDetails from './ViewUserDetails';
import AdminReport from './AdminReport';
import AdminSettings from './AdminSettings';
import Topbar from '../../components/common/Topbar'

import band from '../../assets/images/band.jpg'
import EventBanner from '../../assets/images/aaley.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AdminEvents() {
    const events = [
        {
          eventid: 1,
          event_name: 'Aaley Conert',
          location: 'Example Place, Example Town',
          date: 'June 14 2023',
          start_time: '18:00',
          image: EventBanner
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
  return (
    <>
    <SideMenuBarAdmin>
    <Topbar/>
    <div className='header-admin'>
        <div className='header-title'>
            <h1>Events</h1>
        </div>
    </div>
    <div className="row">
        {events.map(event => (
        <div className="col-md-4" key={event.eventid}>
            <Link to={'/admin/event/eventDetails'} className="event-link">

            <div className="event-card">
                <img
                    src={event.image}
                    alt={`Event ${event.eventid}`}
                    style={{ width: '450px', height: '150px', marginBottom: '20px', borderRadius: '30px' }}
    />          <div className="event-details">
                    <div><h3>{event.event_name}</h3>
                        <p>{event.location}</p>
                        <div className="start-time">Start Time {event.start_time}</div>
                    </div>

                    <div className='date-container'>
                        <FontAwesomeIcon icon="calendar" style={{ color: "#7643D2", fontSize: '28px' }} />
                        <div className="start-date">   {event.date}</div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        ))}
    </div>

    <Routes>        
          <Route path='/admin/admindashobard' element={<AdminDashboard/>} />
          <Route path='/admin/registration' element={<AdminRegistration/>} />
          <Route path='/admin/registration/proofcheck' element={<ProofCheck/>} />
          <Route path='/admin/userdetails' element={<AllUserDetails/>} />
          <Route path='/admin/userdetails/viewdetails' element={<ViewUserDetails/>} />
          <Route path='/admin/report' element={<AdminReport/>} />
          <Route path='/admin/settings' element={<AdminSettings/>} />
    </Routes>
    </SideMenuBarAdmin>
    </>
  )
}

export default AdminEvents
