import React, { useState } from 'react';
import '../assets/css/admin.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/common/NavBar';
import logo from '../assets/images/logo-login.png'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    axios
      .post('http://localhost:8080/user/login', credentials)
      .then((response) => {
        const responseParts = response.data.split('#');
        const msg = responseParts[0];
        const membertype = responseParts[1];
        const userId = responseParts[2];

        if (msg === 'Login Success') {
          
          localStorage.setItem('userId', userId);

          if (membertype === 'Artist') {
            navigate('/artistdashboard');
          } else if (membertype === 'Band') {
            navigate('/banddashboard');
          } else if (membertype === 'Organizer') {
            navigate('/organizer/dashboard');
          } else if (membertype === 'Moderator') {
            navigate('/moderator/moderatorDashoboardContent');
          } else if (membertype === 'Admin') {
            navigate('/admin/admindashboard');
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          setMsg(error.response.data);
        } else if (error.request) {
          setMsg('Network error. Please try again later.');
        } else {
          setMsg('An error occurred. Please try again later.');
        }
        
        console.error(error);
      });
  };

  return (
    <div>
      <NavBar />
      <div className='login template d-flex justify-content-center align-items-center vh-100 bgimage '>
        <div className='form_container p-5'>
          <form className='form'>
            <h4 className='text-center text-white'>W E L C O M E to</h4>
            <div className='logo-in-login'>
            <img src={logo} alt="Description of the image"></img>
            </div>
            <p className='text-center text-white'>where your musical journey begins.</p>
            <div className='mb-2 text-white'>
            {msg && <p className='text-danger'>{msg}</p>}
              <label htmlFor='email'>E mail</label>
              <input
                type='email'
                placeholder='Enter Email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-2 text-white'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                placeholder='Enter Password'
                className='form-control'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <input type='checkbox' className='custom-control custom-checkbox' id='check' />
              <label htmlFor='check' className='custom-input-label ms-2 text-white'>
                Remember me
              </label>
            </div>
            <div className='d-grid'>
              <button
                className='btn btn-primary login-button'
                onClick={handleClick}
              >
                Sign In
              </button>
            </div>
            <p className='text-end mt-2 text-white link-login'>
              Forgot <a href=''>Password?</a> or
              <Link to={'/signup'} className='ms-2'>
                SignUp
              </Link>
            </p>
            
          </form>
        </div>
      </div>
    </div>
  );
}
