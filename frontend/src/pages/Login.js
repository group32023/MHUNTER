import React, { useState } from 'react'
import '../assets/css/admin.css'
import {useNavigate} from 'react-router-dom';
import { Link} from 'react-router-dom';
import axios from "axios";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {


    e.preventDefault();
    const credentials = { email, password };
    axios
      .post('http://localhost:8080/user/login', credentials)
      .then((response) => {
        const responseParts = response.data.msg.split('#');
        const msg = responseParts[0];
        const membertype = responseParts[1];
        
        alert(msg);
        if(msg==="Login Success"){
          if (membertype === "Artist") {
            navigate('/artistdashboard');
          } else if (membertype === "Band") {
            navigate('/banddashboard');
          }else if (membertype === "Organizer") {
            navigate('/organizerdashboard');
          }else if (membertype === "Moderator") {
            navigate('/moderatordashboard');
          }else if (membertype === "Admin") {
            navigate('/admindashboard');
          }
         
        }
      })
      .catch((error) => {
        if (error.response) {
          setMsg(error.response.data.msg);
        } else if (error.request) {
          
          setMsg('Network error. Please try again later.');
        } else {
          
          setMsg('An error occurred. Please try again later.');
        }
        console.error(error);
      });

    /*fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        setMsg(response.data.msg);
        if (response.ok) {
          
          console.log("Logged in successfully");
        } else {
          throw new Error("Failed to log in");
        }
      })
      .catch((error) => {
        console.error(error);
      });*/
  }

  
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bgimage '>
      <div className='form_container p-5 rounded' >
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
