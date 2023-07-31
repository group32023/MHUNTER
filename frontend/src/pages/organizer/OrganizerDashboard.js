import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import OrganizerDashboardContent from './OrganizerDashboardContent';
import OrganizerComplaint from './OrganizerComplaint';
import OrganizerEventHistory from './OrganizerEventHistory';
import OrganizerProfile from './OrganizerProfile';
import OrganizerEventDashboard from './OrganizerEventDashboard';
import '../../assets/css/OrganizerDashboard.css';

export default function OrganizerDashboard({ children }) {
  // Function to toggle the sidebar expansion
  const handleToggleSidebar = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
    <div className="full-container">
      {/* Button to toggle sidebar expansion */}
      <button onClick={handleToggleSidebar}>Toggle Sidebar</button>
      <SideMenuBarOrganizer isExpanded={isExpanded}>
        <Routes>
          {/* Nested routes for the Organizer Dashboard */}
          <Route path='/organizer/dashboard' element={<OrganizerDashboardContent />}></Route>
          <Route path='/organizer/event' element={<OrganizerEventDashboard />}></Route>
          <Route path='/organizer/eventhistory' element={<OrganizerEventHistory />}></Route>
          <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
          <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>
          {/* You can add more nested routes for the Organizer Dashboard here */}
        </Routes>
      </SideMenuBarOrganizer>
      <main className={isExpanded ? "mainContainer" : "mainContainer-NX"}>{children}</main>
    </div>

  );
}
