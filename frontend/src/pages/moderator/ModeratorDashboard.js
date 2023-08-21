import React from "react";
import { Routes, Route } from 'react-router-dom';
import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator';
import ModeratorRegistration from './registration';
import ModeratorComplaints from './complaints';
import ModeratorUserDetails from './userDetails';
import ModeratorDashoboardContent from './moderatorDashoboardContent';
import EventDetails from './eventDetails';
import ModeratorEvent from './event';
import ViewComplaints from './viewComplaints';
import ProofCheck from './ProofCheck';
import Suspenduser from './suspenduser';  
export default function ModeratorDashboard() {
  return (
    <>
      <SideMenuBarModerator>
      
        
        <Routes>
          {/* Nested routes for the Organizer Dashboard */}
          <Route path='/moderator/moderatorDashoboardContent' element={<ModeratorDashoboardContent />}></Route>
          <Route path='/moderator/registration' element={<ModeratorRegistration />}></Route>
          <Route path='/moderator/complaints' element={<ModeratorComplaints />}></Route>
          <Route path='/moderator/complaints/viewComplaints' element={<ViewComplaints />}></Route>

          <Route path='/moderator/userDetails' element={<ModeratorUserDetails />}></Route>
          <Route path='/moderator/event' element={<ModeratorEvent />}></Route>
          <Route path='/moderator/event/eventDetails' element={<EventDetails />}></Route>
          <Route path='/moderator/registration/ProofCheck' element={<ProofCheck />}></Route>
          <Route path='/moderator/registration/Proofcheck/suspenduser' element={<Suspenduser />}></Route>

        </Routes>
      </SideMenuBarModerator>
    </>
  );
}
