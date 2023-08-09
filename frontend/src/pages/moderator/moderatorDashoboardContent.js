import React, {useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator';
import '../../assets/css/moderator/moderatorComplaints.css'
import ModeratorRegistration from './registration';
import ModeratorComplaints from './complaints';
import ModeratorUserDetails from './userDetails';
import ModeratorEvent from "./event";

import ModeratorImage from '../../assets/images/moderatorDash.png'
import ModeratorPendingRequest from '../../components/Moderator/moderatorPendingRequest'
import ModeratorUpcommingEvent from '../../components/Moderator/moderatorUpcommingEvent'
import Calendar from 'react-calendar';


export default function ArtistDashboard() {
  const[date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }
  const [expand,setExpandedSideBar] = useState(true)

  return (
    <>
    <SideMenuBarModerator>
    <div className='main-container'>
        <div className='side-bar'>

        </div>
        <div className='body-container'>

            {/*header icon*/}
            <div className='header-admin'>

                <div className='header-title'>
                    <h1>Dashboard</h1>
                </div> 

            </div>
            <div className={expand ? 'moderatorWebPoster':'moderatorWebPoster-exp'}>
              <p>Welcome!</p>
              <img src={ModeratorImage } alt='' className='webPostImage2'></img>

              <span>Welcome to a world where your music event dreams become a reality with just a few clicks...</span>
            </div>
            <div className="col-sm-4 moderator-cal">
              <div className='Moderator-calendar text-center'>
                <Calendar onChange={onChange} value={date} />
              </div>
              </div>
              

              <div className={expand ? 'moderatorUpcommingEvent':'moderatorUpcommingEvent-ex'}>
              <ModeratorUpcommingEvent/>
            </div>
                 {/* pending request */}
                 <div className={expand ? 'moderatorpendingRequestDiv':'moderatorpendingRequestDiv-exp'}>
                <ModeratorPendingRequest />
            </div>

            

        </div> 
    </div>
    
    <Routes>
          {/* Nested routes for the Organizer Dashboard */}
          <Route path='/moderator/registration' element={<ModeratorRegistration />}></Route>
          <Route path='/moderator/complaints' element={<ModeratorComplaints />}></Route>
          <Route path='/moderator/userDetails' element={<ModeratorUserDetails />}></Route>
          <Route path='/moderator/event' element={<ModeratorEvent />}></Route>
        </Routes>
      </SideMenuBarModerator>
    </>
  )
}
