import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from './pages/Contact';






function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
         
        </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;