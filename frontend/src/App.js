import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideMenuBarAdmin from '../src/components/common/SideMenuBar/SideMenuBarAdmin';
import OrganizerEventDashboard from '../src/pages/organizer/OrganizerEventDashboard'
import OrganizerComplaint from './pages/organizer/OrganizerComplaint';
import "./index.css"

function App() {

  return (
    <BrowserRouter>
      <SideMenuBarAdmin>
        <Routes>
          <Route path="/" element={<OrganizerEventDashboard />} />
          <Route path="/complaint" element={<OrganizerComplaint />} />
        </Routes>
      </SideMenuBarAdmin>
    </BrowserRouter>
  );
}

export default App;


