
// import Organizer Components
import OrganizerDashboard from './pages/organizer/OrganizerDashboard'
import OrganizerComplaint from './pages/organizer/OrganizerComplaint';
import OrganizerDashboardContent from './pages/organizer/OrganizerDashboardContent'
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
import BandDashboard from './pages/band/BandDashboard';
import ModeratorDashboard from './pages/moderator/ModeratorDashboard';
import AdminRegistration from './pages/admin/AdminRegistration';
import ProofCheck from './pages/admin/ProofCheck';
import AllUserDetails from './pages/admin/AllUserDetails';
import ViewUserDetails from './pages/admin/ViewUserDetails';
import AdminReport from './pages/admin/AdminReport';
import AdminSettings from './pages/admin/AdminSettings';
import OrganizerSignup from './pages/OrganizerSignup';
import Event from './pages/Event';
import Band from './pages/Band';
import Artist from './pages/Artist';
import AboutUs from './pages/AboutUs';
import ArtistDashboard from './pages/ArtistDashboard';
import ArtistPendingRequests from "./pages/ArtistPendingRequests";
import ArtistPendingRequestView from "./pages/ArtistPendingRequestView"
import ArtistGenerateReports from "./pages/ArtistGenerateReports"
import ConfirmRequest from "./pages/ConfirmRequest"
import ArtistPriorBooking from "./pages/ArtistPriorBooking"

import ArtistEvent from './pages/ArtistEvent';
import BandInvoice from './pages/BandInvoice';
import ArtistEventOn from './pages/ArtistEventOn';
import ArtistSpecificEvent from './pages/ArtistSpecificEvent';
import ArtistGenerateReportsToday from './pages/ArtistGenerateReportsToday'
import ArtistDashboardContent from './pages/ArtistDashboardContent';
import MyFeed from './pages/MyFeed';
function App() {
  return (

    <div className="App">

      <Router>
        <Routes>
          {/* Organizer Routes */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/organizer' element={<OrganizerDashboard />}>

            <Route path='/organizer/dashboard' element={<OrganizerDashboardContent />}></Route>
            <Route path='/organizer/event' element={<OrganizerEventDashboard />}></Route>
            <Route path='/organizer/event/CreateEvent' element={<CreateEvent />}></Route>
            <Route path='/organizer/eventhistory' element={<OrganizerEventHistory />}></Route>
            <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
            <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>

          </Route>

          {/* Organizer Routes */}
          <Route path='/' element={<ArtistDashboard />}>
            <Route path='/artist/PendingRequests' element={<ArtistPendingRequests/>}></Route>
            <Route path='/artist/Reports' element={<ArtistGenerateReports/>}></Route>
            <Route path='/artist/Dashboard' element={<ArtistDashboardContent/>}></Route>
            <Route path='/artist/report/today/:id' element={<ArtistGenerateReportsToday/>}></Route>
            <Route path='/artist/Event' element={<ArtistEvent/>}></Route>
            <Route path='/artist/EventSpecific/:id' element={<ArtistSpecificEvent/>}></Route>
            <Route path='/artist/PendingRequestView/:id' element={<ArtistPendingRequestView/>}></Route>
            <Route path='/artist/priorbooking/:id1/:id2' element={<ArtistPriorBooking/>}></Route>
            <Route path='/artist/eventsOn/:mmid/:date/:id' element={<ArtistEventOn/>}></Route>
            <Route path='/artist/invoice/:id' element={<BandInvoice/>}></Route> 
            <Route path='/artist/MyFeed' element={<MyFeed/>}></Route>
          </Route>


          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/artistbandsignup' element={<ArtistBandSignup />} />
          <Route path='/artistsignup' element={<ArtistSignup />} />
          <Route path='/bandsignup' element={<BandSignup/>} />
          <Route path='/organizersignup' element ={<OrganizerSignup/>} />
          <Route path='/artistdashboard' element={<ArtistDashboard/>} />
          <Route path='/banddashboard' element={<BandDashboard/>} />
          <Route path='/moderatordashboard' element={<ModeratorDashboard/>} />
          <Route path='/organizerdashboard' element={<OrganizerDashboard/>} />


          {/* navBar */}
          <Route path='/event' element={<Event/>}></Route>
          <Route path='/band' element={<Band/>}></Route>
          <Route path='/artist' element={<Artist/>}></Route>
          <Route path='/aboutUs' element={<AboutUs/>}></Route>

          {/*Admin*/}
          {/* <Route path='/admin/admindashboard' element={<AdminDashboard/>} />
          <Route path='/admin/registration' element={<AdminRegistration/>} />
          <Route path='/admin/registration/proofcheck' element={<ProofCheck/>} />
          <Route path='/admin/userdetails' element={<AllUserDetails/>} />
          <Route path='/admin/userdetails/viewdetails' element={<ViewUserDetails/>} />
          <Route path='/admin/report' element={<AdminReport/>} />
          <Route path='/admin/settings' element={<AdminSettings/>} />

      </Routes>
    </Router>  */}
          <Route path='/' element={<Home/>}></Route>
          <Route path='/event' element={<Event/>}></Route>
          <Route path='/band' element={<Band/>}></Route>
          <Route path='/artist' element={<Artist/>}></Route>
          <Route path='/aboutUs' element={<AboutUs/>}></Route>
          <Route path='/artist/PendingRequests' element={<ArtistPendingRequests/>}></Route>
          <Route path='/artist/Reports' element={<ArtistGenerateReports/>}></Route>
          <Route path='/artist/Dashboard' element={<ArtistDashboard/>}></Route>
          <Route path='/artist/report/today/:id' element={<ArtistGenerateReportsToday/>}></Route>
          <Route path='/artist/Event' element={<ArtistEvent/>}></Route>
          <Route path='/artist/EventSpecific/:id' element={<ArtistSpecificEvent/>}></Route>
          <Route path='/artist/PendingRequestView/:id' element={<ArtistPendingRequestView/>}></Route>
          <Route path='/artist/priorbooking/:id1/:id2' element={<ArtistPriorBooking/>}></Route>
          <Route path='/artist/eventsOn/:mmid/:date/:id' element={<ArtistEventOn/>}></Route>
          <Route path='/band/invoice/:id' element={<BandInvoice/>}></Route> 
          
          <Route path='/artist/MyFeed' element={<MyFeed/>}></Route>
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


