import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import OrganizerDashboard from './pages/organizer/OrganizerDashboard';
import ArtistDashboard from './pages/artist/ArtistDashboard';
import BandDashboard from './pages/band/BandDashboard';
import ModeratorDashboard from './pages/moderator/ModeratorDashboard';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SlideMenuBarArtist from './components/common/SideMenuBar/SideMenuBarArtist'
import Event from './pages/Event';
import Band from './pages/Band';
import Artist from './pages/Artist';
import AboutUs from './pages/AboutUs';
import ArtistDashboard from './pages/ArtistDashboard';
function App() {
  return (
    
    <div className="App">
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/artistbandsignup' element={<ArtistBandSignup />} />
          <Route path='/artistsignup' element={<ArtistSignup />} />
          <Route path='/bandsignup' element={<BandSignup/>} />
          <Route path='/admindashboard' element={<AdminDashboard/>} />
          <Route path='/artistdashboard' element={<ArtistDashboard/>} />
          <Route path='/banddashboard' element={<BandDashboard/>} />
          <Route path='/moderatordashboard' element={<ModeratorDashboard/>} />
          <Route path='/organizerdashboard' element={<OrganizerDashboard/>} />

          <Route path='/' element={<Home/>}></Route>
          <Route path='/event' element={<Event/>}></Route>
          <Route path='/band' element={<Band/>}></Route>
          <Route path='/artist' element={<Artist/>}></Route>
          <Route path='/aboutUs' element={<AboutUs/>}></Route>
          
          <Route path='/artist/Dashboard' element={<ArtistDashboard/>}></Route>


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
  )
}


export default App;
