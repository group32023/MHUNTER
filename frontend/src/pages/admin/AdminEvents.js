import Reac, { useState } from 'react'
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

import {useEffect } from 'react';
import axios from 'axios';

function AdminEvents() {
    const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/event/allEvents');
        setEvents(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

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
        <div className="col-md" key={event.eventid}>
            <Link to={`/admin/event/eventDetails/${event.eventid}`} className="event-link-admin">

                <div className="event-card-admin">
                    <img
                    src={`http://localhost:8080/postData/uploads/image/${event.image}.jpg`}
                    alt={`Event ${event.eventid}`}
                    style={{ height: '150px', marginBottom: '20px', borderRadius: '30px' }} />

                    <div className="event-details" style={{display:'flex', justifyContent:'center'}}>
                        <div><h3>{event.event_name}</h3>
                        <p >{event.location}</p>
                        <p >Start Time {event.start_time}</p>
                        </div>
                        
                    </div>

                    <div className='date-container'>
                        <FontAwesomeIcon icon="calendar" style={{ color: "#7643D2", fontSize: '28px' }} /> {event.date}
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