import React from "react";
import { Routes, Route } from 'react-router-dom';
import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator';
import ModeratorRegistration from './registration';
import ModeratorComplaints from './complaints';
import ModeratorUserDetails from './userDetails';
 import '../../assets/css/OrganizerDashboard.css';
import ModeratorEvent from "./event";
export default function OrganizerDashboard() {
  return (
    <>
      <SideMenuBarModerator>
        <div>
          {/* Hard-coded content */}
          <h2>Welcome to the Organizer Dashboard!</h2>
          <p>This is the main dashboard for organizers. You can manage various aspects of your events and users here.</p>
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
  );
}
