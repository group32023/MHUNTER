import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from './pages/contact';
import ArtistDetails from './pages/artistDetails';
import Post from './pages/post';
import Video from './pages/video';







function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/artistDetails' element={<ArtistDetails/>}></Route>
          <Route path='/post' element={<Post/>}></Route>
          <Route path='/video' element={<Video/>}></Route>



         
        </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;