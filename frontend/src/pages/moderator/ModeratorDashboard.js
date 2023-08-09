import React from "react";
import { Routes, Route } from 'react-router-dom';
import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator';
import ModeratorDashoboardContent from './moderatorDashoboardContent';
import ModeratorRegistration from './registration';
import ModeratorComplaints from './complaints';
import ModeratorUserDetails from './userDetails';
 import '../../assets/css/OrganizerDashboard.css';
import ModeratorEvent from "./event";

export default function OrganizerDashboard() {
  return (
    <>
      <SideMenuBarModerator>
        <Routes>
          {/* Nested routes for the Organizer Dashboard */}
          <Route path='/moderator/moderatorDashoboardContent' element={<ModeratorDashoboardContent />}></Route>
          <Route path='/moderator/registration' element={<ModeratorRegistration  />}></Route>
          <Route path='/moderator/complaints' element={<ModeratorComplaints />}></Route>
          <Route path='/moderator/userDetails' element={<ModeratorUserDetails />}></Route>
          <Route path='/moderator/event' element={<ModeratorEvent />}></Route>

        </Routes>
      </SideMenuBarModerator>
    </>


  );
}