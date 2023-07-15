import './App.css';
import NavBar from './components/common/NavBar';
import MainSlider from './components/common/MainSlider'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from './pages/Organizer/CreateEvent';

function App() {
  return (
    
    <BrowserRouter>

      <div className="App">
        <div>
          <MainSlider></MainSlider>
          <div>
            <NavBar></NavBar>
          </div>
        </div>

      </div>
      <Routes>

        <Route path="/Organizer/CreateEvent" element={<CreateEvent/>} >
        </Route>
      </Routes>

    </BrowserRouter>

  );

}

export default App;
