
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrganizerDashboard from '../src/pages/organizer/OrganizerDashboard'
// import OrganizerComplaint from './pages/organizer/OrganizerComplaint';
import "./index.css"
// import SideMenuBarOrganizer from '../src/components/common/SideMenuBar/SideMenuBarOrganizer'

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
function App() {
  return (

    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<OrganizerDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/artistbandsignup' element={<ArtistBandSignup />} />
          <Route path='/artistsignup' element={<ArtistSignup />} />
          <Route path='/bandsignup' element={<BandSignup />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/artistdashboard' element={<ArtistDashboard />} />
          <Route path='/banddashboard' element={<BandDashboard />} />
          <Route path='/moderatordashboard' element={<ModeratorDashboard />} />
          {/* <Route path='/organizerdashboard' element={<OrganizerDashboard />} /> */}


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


