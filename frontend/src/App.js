
// import Organizer Components
import OrganizerDashboard from './pages/organizer/OrganizerDashboard'
import OrganizerComplaint from './pages/organizer/OrganizerComplaint';
// import OrganizerDashboardContent from './pages/organizer/OrganizerDashboardContent'
import OrganizerEventHistory from './pages/organizer/OrganizerEventHistory'
import OrganizerEventDashboard from './pages/organizer/OrganizerEventDashboard'
import ViewEvents from './pages/organizer/ViewEvents'
import CreateEvent from './pages/organizer/CreateEvent'
import OrganizerProfile from './pages/organizer/OrganizerProfile';
import SearchArtist from './pages/organizer/SearchArtist';


import "./index.css"


import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
import ArtistBandSignup from './pages/ArtistBandSignup';
import ArtistSignup from './pages/ArtistSignup';
import NavBar from './components/common/NavBar';
import MainSlider from './components/common/MainSlider';
import BandSignup from './pages/BandSignup';
import AdminDashboard from './pages/admin/AdminDashboard';
import ArtistDashboard from './pages/artist/ArtistDashboard';
import BandDashboard from './pages/band/BandDashboard';
import ModeratorDashboard from './pages/moderator/ModeratorDashboard';
import AdminRegistration from './pages/admin/AdminRegistration';
import ProofCheck from './pages/admin/ProofCheck';
import AllUserDetails from './pages/admin/AllUserDetails';
import ViewUserDetails from './pages/admin/ViewUserDetails';
import AdminReport from './pages/admin/AdminReport';
import AdminSettings from './pages/admin/AdminSettings';
import OrganizerSignup from './pages/OrganizerSignup';
import UserDetails from './pages/admin/UserDetails';
function App() {
  return (

    <div className="App">

      <Router>
        <Routes>
          {/* Organizer Routes */}
          <Route path='/' element={<Home />}></Route>

          <Route path='/organizer/dashboard' element={<OrganizerDashboard />}></Route>
          <Route path='/organizer/event' element={<ViewEvents />}></Route>
          <Route path='/organizer/event/eventdashboard' element={<OrganizerEventDashboard />}></Route>
          <Route path='/organizer/event/CreateEvent' element={<CreateEvent />}></Route>
          <Route path='/organizer/eventhistory' element={<OrganizerEventHistory />}></Route>
          <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
          <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>
          <Route path='/organizer/searchartist' element={<SearchArtist />} />


          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/artistbandsignup' element={<ArtistBandSignup />} />
          <Route path='/artistsignup' element={<ArtistSignup />} />
          <Route path='/bandsignup' element={<BandSignup />} />
          <Route path='/organizersignup' element={<OrganizerSignup />} />
          <Route path='/artistdashboard' element={<ArtistDashboard />} />
          <Route path='/banddashboard' element={<BandDashboard />} />
          <Route path='/moderatordashboard' element={<ModeratorDashboard />} />
          <Route path='/organizerdashboard' element={<OrganizerDashboard />} />


          {/*Admin*/}
          <Route path='/admin/admindashboard' element={<AdminDashboard />} />
          <Route path='/admin/registration' element={<AdminRegistration />} />
          <Route path='/admin/registration/proofcheck' element={<ProofCheck />} />
          <Route path='/admin/Alluserdetails' element={<UserDetails />} />
          <Route path='/admin/userdetails' element={<AllUserDetails />} />
          <Route path='/admin/userdetails/viewdetails' element={<ViewUserDetails />} />
          <Route path='/admin/report' element={<AdminReport />} />
          <Route path='/admin/settings' element={<AdminSettings />} />

        </Routes>
      </Router>

      {/*<div>
      <MainSlider>
      </MainSlider>
      <div>
        <NavBar>
        </NavBar>
      </div>
  </div>*/}


    </div>


  );

}

export default App;


