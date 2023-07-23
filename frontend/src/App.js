import './App.css';
// import NavBar from './components/common/NavBar';
// import MainSlider from './components/common/MainSlider'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from './pages/Organizer/CreateEvent';
import ViewEvents from './pages/Organizer/ViewEvents'

function App() {
  return (
    
    <BrowserRouter>

      {/* <div className="App">
        <div>
          <MainSlider></MainSlider>
          <div>
            <NavBar></NavBar>
          </div>
        </div>

      </div> */}
      
      <Routes>

        <Route path="/Organizer/CreateEvent" element={<CreateEvent/>} >
        </Route>
        <Route path="/Organizer/ViewEvents" element={<ViewEvents/>} >
        </Route>
      </Routes>

    </BrowserRouter>

  );

}

export default App;
