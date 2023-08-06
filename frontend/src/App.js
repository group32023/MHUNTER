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
import ArtistPriorBooking from "./pages/ArtistPriorBooking"

import ArtistEvent from './pages/ArtistEvent';
import ArtistInvoice from './pages/ArtistInvoice.js';







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
          {/* <Route path='/artist/Dashboard' element={<ArtistPendingRequests/>}></Route> */}
          {/* <Route path='/artist/Dashboard' element={<ArtistPendingRequestView/>}></Route> */}
          <Route path='/artist/Dashboard' element={<ArtistInvoice/>}></Route>
          {/* <Route path='/artist/PendingRequestView/:id' element={<ArtistPendingRequestView/>}></Route>
          <Route path='/artist/pendingRequest/confirmRequest/:id' element={<ConfirmRequest/>}></Route> */}
          {/* <Route path='/dashboard' element={<ArtistPendingRequests/>}></Route> */}
          {/* <Route path='/dashboard' element={<ArtistPendingRequestView/>}></Route> */}
          {/* <Route path='/artist/Dashboard' element={<ArtistDashboard/>}></Route>
          {/*<Route path='/artist/Reports' element={<ArtistGenerateReports/>}></Route>
          <Route path='/artist/Event' element={<ArtistEvent/>}></Route> */}

        </Routes>
      </Router>
      
      
     
     
    </div>
  );

}

export default App;
