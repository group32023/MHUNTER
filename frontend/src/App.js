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
import ArtistEvent from './pages/ArtistEvent';
import ArtistSpecificEvent from './pages/ArtistSpecificEvent';

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
          {/* <Route path='/dashboard' element={<ArtistPendingRequests/>}></Route> */}
          {/* <Route path='/dashboard' element={<ArtistPendingRequestView/>}></Route> */}
          <Route path='/artist/Dashboard' element={<ArtistDashboard/>}></Route>
          <Route path='/artist/Reports' element={<ArtistGenerateReports/>}></Route>
          <Route path='/artist/Event' element={<ArtistEvent/>}></Route>
          <Route path='/artist/EventSpecific' element={<ArtistSpecificEvent/>}></Route>

        </Routes>
      </Router>

      
     
     
    </div>
  );

}

export default App;
