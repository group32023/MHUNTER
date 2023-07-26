import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
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
          <Route path='/' element={<Home/>}></Route>
          <Route path='/event' element={<Event/>}></Route>
          <Route path='/band' element={<Band/>}></Route>
          <Route path='/artist' element={<Artist/>}></Route>
          <Route path='/aboutUs' element={<AboutUs/>}></Route>
          <Route path='/dashboard' element={<ArtistDashboard/>}></Route>
        </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;
