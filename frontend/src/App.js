import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideMenuBarArtist from './components/common/SideMenuBar/SideMenuBarArtist';
import OrganizerEventDashboard from '../src/pages/organizer/OrganizerEventDashboard'
import OrganizerComplaint from './pages/organizer/OrganizerComplaint';
import "./index.css"

function App() {

  return (
    <BrowserRouter>
      <SideMenuBarArtist>
        <Routes>
          <Route path="/" element={<OrganizerEventDashboard />} />
          <Route path="/complaint" element={<OrganizerComplaint />} />
        </Routes>
      </SideMenuBarArtist>
    </BrowserRouter>
  );
}

export default App;


