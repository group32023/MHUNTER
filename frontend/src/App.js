import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrganizerEventDashboard from '../src/pages/organizer/OrganizerEventDashboard'
import OrganizerComplaint from './pages/organizer/OrganizerComplaint';
import "./index.css"
import SideMenuBarOrganizer from '../src/components/common/SideMenuBar/SideMenuBarOrganizer'

function App() {

  return (
    <BrowserRouter>
      <SideMenuBarOrganizer>
        <Routes>
          <Route path="/" element={<OrganizerEventDashboard />} />
          <Route path="/complaint" element={<OrganizerComplaint />} />
        </Routes>
      </SideMenuBarOrganizer>
    </BrowserRouter>
  );
}

export default App;


