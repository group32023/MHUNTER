import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SlideMenuBarArtist from './components/common/SideMenuBar/SideMenuBarArtist'
import Event from './pages/Event';
import Band from './pages/Band';
import Artist from './pages/Artist';
import AboutUs from './pages/AboutUs';
import ArtistDashboard from './pages/ArtistDashboard';
import ArtistPendingRequests from "./pages/ArtistPendingRequests";
import ArtistPendingRequestView from "./pages/ArtistPendingRequestView"
import ArtistGenerateReports from "./pages/ArtistGenerateReports"
import ConfirmRequest from "./pages/ConfirmRequest"








function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/event' element={<Event/>}></Route>
          <Route path='/band' element={<Band/>}></Route>
          <Route path='/artist' element={<Artist/>}></Route>
          <Route path='/aboutUs' element={<AboutUs/>}></Route>
          <Route path='/artist/Dashboard' element={<ArtistPendingRequests/>}></Route>
          {/* <Route path='/artist/Dashboard' element={<ArtistPendingRequestView/>}></Route> */}
          {/* <Route path='/artist/Dashboard' element={<ArtistGenerateReports/>}></Route> */}
          <Route path='/artist/PendingRequestView/:id' element={<ArtistPendingRequestView/>}></Route>
          <Route path='/artist/pendingRequest/confirmRequest/:id' element={<ConfirmRequest/>}></Route>

        </Routes>
      </Router>
      
      
     
     
    </div>
  );
// import NavBar from './components/common/NavBar';
// import MainSlider from './components/common/MainSlider'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CreateEvent from './pages/Organizer/CreateEvent';
// import ViewEvents from './pages/Organizer/ViewEvents'

// function App() {
//   return (
    
//     <BrowserRouter>

//       {/* <div className="App">
//         <div>
//           <MainSlider></MainSlider>
//           <div>
//             <NavBar></NavBar>
//           </div>
//         </div>

//       </div> */}
      
//       <Routes>

//         <Route path="/Organizer/CreateEvent" element={<CreateEvent/>} >
//         </Route>
//         <Route path="/Organizer/ViewEvents" element={<ViewEvents/>} >
//         </Route>
//       </Routes>

//     </BrowserRouter>

//   );

}

export default App;
