import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin';
import OrganizerDashboardContent from './OrganizerDashboardContent';
import OrganizerComplaint from './OrganizerComplaint';
import '../../assets/css/OrganizerDashboard.css';

export default function OrganizerDashboard() {
  return (
    <SideMenuBarAdmin>
      <Routes>
        {/* Nested routes for the Organizer Dashboard */}
        <Route path="/organizer/dashboard" element={<OrganizerDashboardContent />} />
        <Route path="/organizer/complaint" element={<OrganizerComplaint />} />
        {/* You can add more nested routes for the Organizer Dashboard here */}
      </Routes>
    </SideMenuBarAdmin>
  );
}
