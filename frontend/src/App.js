import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Contact from './pages/contact';
import ArtistDetails from './pages/artistDetails';
import Post from './pages/post';
import Video from './pages/video';

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
import ArtistBandSignup from './pages/ArtistBandSignup';
import ArtistSignup from './pages/ArtistSignup';
import NavBar from './components/common/NavBar';
import MainSlider from './components/common/MainSlider';
import BandSignup from './pages/BandSignup';
// import AdminDashboard from './pages/admin/AdminDashboard';
import OrganizerDashboard from './pages/organizer/OrganizerDashboard';
import ArtistDashboard from './pages/artist/ArtistDashboard';
import BandDashboard from './pages/band/BandDashboard';
import ModeratorDashboard from './pages/moderator/ModeratorDashboard';
import ModeratorDashoboardContent from './pages/moderator/moderatorDashoboardContent';
import ModeratorRegistration from './pages/moderator/registration';
import ModeratorComplaints from './pages/moderator/complaints';
import ModeratorUserDetails from './pages/moderator/userDetails';
import ProofCheck from './pages/moderator/ProofCheck';
import EventDetails from './pages/moderator/eventDetails';
import ViewComplaints from './pages/moderator/viewComplaints';
import ModeratorEvent from "./pages/moderator/event";
import Suspenduser from './pages/moderator/suspenduser';

function App() {
  return (
    
    <div className="App">

    <BrowserRouter>
      <Routes>
         <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/artistDetails' element={<ArtistDetails/>}></Route>
          <Route path='/post' element={<Post/>}></Route>
          <Route path='/video' element={<Video/>}></Route>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/artistbandsignup' element={<ArtistBandSignup />} />
          <Route path='/artistsignup' element={<ArtistSignup />} />
          <Route path='/bandsignup' element={<BandSignup/>} />
          <Route path='/artistdashboard' element={<ArtistDashboard/>} />
          <Route path='/banddashboard' element={<BandDashboard/>} />
           {/* moderator */}
          <Route path='/' element={<ModeratorDashboard/>}>
          <Route path='/moderator/moderatorDashboard' element={<ModeratorDashboard/>} />
          <Route path='/moderator/moderatorDashoboardContent' element={<ModeratorDashoboardContent />}></Route>
          <Route path='/moderator/registration' element={<ModeratorRegistration  />}></Route>
          <Route path='/moderator/registration/ProofCheck' element={<ProofCheck/>} />
          <Route path='/moderator/event' element={<ModeratorEvent />}></Route>
          <Route path='/moderator/complaints' element={<ModeratorComplaints />}></Route>
          <Route path='/moderator/complaints/viewComplaints' element={<ViewComplaints/>} />
          <Route path='/moderator/userDetails' element={<ModeratorUserDetails />}></Route>
          <Route path='/moderator/event/eventDetails' element={<EventDetails/>}/>
          <Route path='/moderator/registration/ProofCheck' element={<proofCheck/>}/>
          <Route path='/moderator/registration/proofcheck/suspenduser' element={<Suspenduser/>}/>
          </Route>
   

      </Routes>
    </BrowserRouter>
      
      
     
    </div>
    
  );
}

export default App;