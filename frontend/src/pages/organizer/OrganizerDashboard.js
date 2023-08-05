import React from "react";
import { Routes, Route } from 'react-router-dom';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
// import OrganizerDashboardContent from './OrganizerDashboardContent';
import OrganizerComplaint from './OrganizerComplaint';
import OrganizerEventHistory from './OrganizerEventHistory';
import OrganizerProfile from './OrganizerProfile';
import OrganizerEventDashboard from './OrganizerEventDashboard';
import ViewEvents from "./ViewEvents"; 
import CreateEvent from './CreateEvent';
import '../../assets/css/OrganizerDashboard.css';
import OrganizerDashboardContent from "./OrganizerDashboardContent";

export default function OrganizerDashboard() {
  return (
    <>
      <SideMenuBarOrganizer>
        <Routes>
          {/* Nested routes for the Organizer Dashboard */}
          <Route path='/organizer/dashboard' element={<OrganizerDashboardContent />}></Route>
          <Route path='/organizer/event' element={<ViewEvents/>}></Route>
          <Route path='/organizer/event/CreateEvent' element={<CreateEvent/>}></Route>
          <Route path='/organizer/eventhistory' element={<OrganizerEventHistory />}></Route>
          <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
          <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>

        </Routes>
      </SideMenuBarOrganizer>
    </>


  );
}