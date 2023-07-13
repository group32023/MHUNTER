import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
import ArtistBandSignup from './pages/ArtistBandSignup';
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/artistbandsignup' element={<ArtistBandSignup />} />

      </Routes>
    </BrowserRouter>
      
    </div>
    
  );
}

export default App;
