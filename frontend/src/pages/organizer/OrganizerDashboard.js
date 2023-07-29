
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer'
import '../../assets/css/OrganizerDashboard.css'
import React, { createContext, useContext, useState } from 'react';


// Create a context to manage the sidebar state
const SideMenubarContext = createContext();



export default function OrganizerDashboard() {
  const [isExpanded, setExpandState] = useState(false);
  const handleToggleSideMenubar = () => {
    setExpandState(!isExpanded);
  };


  return (
    <SideMenubarContext.Provider value={{ isExpanded, handleToggleSideMenubar }}>
      <div className="main-content-container">
        <SideMenuBarOrganizer />
        <div className={`main-content ${isExpanded ? 'expanded' : ''}`}>
          {/* Main content goes here */}
        </div>
      </div>
    </SideMenubarContext.Provider>
  );
};

export const useSideMenubarOrganizerDashboard = () => {
  return useContext(SideMenubarContext);
};

