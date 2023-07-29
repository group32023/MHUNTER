import React from 'react'
import NavBar from '../components/common/NavBar';
import MainSlider from '../components/common/MainSlider';

export default function Home() {
  return (
    <div>
        {/*<h1>Home Page</h1>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/signup"}>
          <button>Signup</button>
  </Link>*/}
        <div>
          <MainSlider>
          </MainSlider>
        <div>
          <NavBar>
          </NavBar>
        </div>
        </div>

        
        
      
    </div>
  )
}
