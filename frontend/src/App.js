import './App.css';
import NavBar from './components/common/NavBar';
import MainSlider from './components/common/MainSlider'
import Event from './pages/Event'
import AboutUs from './pages/AboutUs'
function App() {
  return (
    <div className="App">
      {/* <div>
      <MainSlider></MainSlider>
      <div>
        <NavBar></NavBar>
      </div>
      </div> */}
      <AboutUs></AboutUs>
     
     
    </div>
  );
}

export default App;
