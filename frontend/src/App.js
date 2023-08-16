import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SlideMenuBarArtist from './components/common/SideMenuBar/SideMenuBarArtist'
import Event from './pages/Event';
import Band from './pages/Band';
import Artist from './pages/Artist';
import AboutUs from './pages/AboutUs';
import ArtistDashboard from './pages/ArtistDashboard';
import ArtistPendingRequests from "./pages/ArtistPendingRequests";
import ArtistPendingRequestView from "./pages/ArtistPendingRequestView";
import ArtistGenerateReports from "./pages/ArtistGenerateReports";
import ConfirmRequest from "./pages/ConfirmRequest"
import ArtistPriorBooking from "./pages/ArtistPriorBooking"

import ArtistEvent from './pages/ArtistEvent';
import BandInvoice from './pages/BandInvoice';
import ArtistEventOn from './pages/ArtistEventOn';
import ArtistSpecificEvent from './pages/ArtistSpecificEvent';
import ArtistGenerateReportsToday from './pages/ArtistGenerateReportsToday'
import ArtistInvoice from './pages/ArtistInvoice';





import MyFeed from './pages/MyFeed';

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
          <Route path='/artist/PendingRequests' element={<ArtistPendingRequests/>}></Route>
          <Route path='/artist/Reports' element={<ArtistGenerateReports/>}></Route>
          <Route path='/artist/Dashboard' element={<ArtistDashboard/>}></Route>
          <Route path='/artist/Reports/:id' element={<ArtistGenerateReportsToday/>}></Route>
          <Route path='/artist/Event' element={<ArtistEvent/>}></Route>
          <Route path='/artist/EventSpecific/:id' element={<ArtistSpecificEvent/>}></Route>
          <Route path='/artist/PendingRequestView/:id' element={<ArtistPendingRequestView/>}></Route>
          <Route path='/artist/priorbooking/:id1/:id2' element={<ArtistPriorBooking/>}></Route>
          <Route path='/artist/eventsOn/:mmid/:date' element={<ArtistEventOn/>}></Route>
          <Route path='/band/invoice/:id' element={<BandInvoice/>}></Route> 
          <Route path='/artist/invoice/:id' element={<ArtistInvoice/>}></Route> 

          
          <Route path='/artist/MyFeed' element={<MyFeed/>}></Route>
        </Routes>
      </Router>
      
      
     
     
    </div>
  );

}

export default App;
