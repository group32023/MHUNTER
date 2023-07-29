import React from 'react'
import "../../assets/css/OrganizerEventDashboard.css"
// import { Routes, Route } from 'react-router-dom';
// import OrganizerComplaint from '../../pages/organizer/OrganizerComplaint';
// import OrganizerEventDashboard from '../organizer/OrganizerEventDashboard'
// import OrganizerEventHistory from '../organizer/OrganizerEventHistory';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer'

function OrganizerDashboard() {
  return (
    <>
      <SideMenuBarOrganizer />
      {/* <Routes>
          <Route path="/" element={<OrganizerDashboard />} />
          <Route path="/event" element={<OrganizerEventDashboard />} />
          <Route path="/eventhistory" element={<OrganizerEventHistory />} />
          <Route path="/complaint" element={<OrganizerComplaint />} />
        </Routes>
      </SideMenuBarOrganizer> */}


      <div className='content_container'>
        <h1>Home</h1>
      </div>
    </>
  )
}



export default OrganizerDashboard
