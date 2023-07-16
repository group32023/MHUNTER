// import './App.css';
// import NavBar from './components/common/NavBar';
// import MainSlider from './components/common/MainSlider'
// function App() {
//   return (
//     <div className="App">
//       <div>
//         <MainSlider></MainSlider>
//         <div>
//           <NavBar></NavBar>
//         </div>
//       </div>


//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrganizerEventDashboard from "../src/pages/organizer/OrganizerEventDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/organizerEventDashboard" element={<OrganizerEventDashboard />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
