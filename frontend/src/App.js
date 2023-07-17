import './App.css';
import Home from './pages/Home';
<<<<<<< Updated upstream
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
=======
import Event from './pages/Event';
import Band from './pages/Band';
import Artist from './pages/Artist';
import AboutUs from './pages/AboutUs';




>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
=======
      {/* <Home></Home> */}
      <Event></Event>
      {/* <Band></Band> */}
      {/* <Artist></Artist> */}
      {/* <AboutUs></AboutUs> */}

>>>>>>> Stashed changes
     
     
    </div>
  );
}

export default App;
