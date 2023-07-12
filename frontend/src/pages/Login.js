import React, { useState } from 'react'
import '../assets/css/admin.css'
import { Link } from 'react-router-dom';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleClick = (e) => {
    e.preventDefault();
    const credentials = { email, password };

    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Logged in successfully");
        } else {
          throw new Error("Failed to log in");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bgimage '>
      <div className='form_container p-5 rounded'>
        <form className='form' >
          <h3 className='text-center text-white'>Sign In</h3>
          <div className='mb-2 text-white'>
            <label htmlFor='email'>E mail</label>
            <input type='email' placeholder='Enter Email' className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-2 text-white'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Paswword' className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
            <label htmlFor='check' className='custom-input-label ms-2 text-white'>
              Remember me
            </label>
          </div>
          <div className='d-grid'> 
            <button className='btn btn-primary' style={{backgroundColor:'rgb(118, 67, 210)'}} onClick={handleClick}>Sign In</button>
          </div>
          <p className='text-end mt-2 text-white'>
            Forgot <a href=''>Password?</a>
            
            <Link to={"/signup"} className='ms-2'>Sign Up </Link>

          </p>
        </form>
      </div>
    </div>
  )
}
