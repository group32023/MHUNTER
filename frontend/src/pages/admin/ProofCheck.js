import React, { useState } from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin'
import '../../assets/css/admin/adminDashboard.css'
import notification from '../../assets/images/notification-a.png'
import home from '../../assets/images/home-button-a.png'
import logout from '../../assets/images/logout-a.png'
import band from '../../assets/images/band.jpg'
import { Link } from 'react-router-dom';


function ProofCheck() {
  const [formData, setFormData] = useState({
    name: '',
    usecode: '',
    userType: '',
    address: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any action with the form data here, like submitting it to a backend server
    console.log(formData);
  };
  return (
    <div className='main-container'>
      <div className='side-bar'>
        <SideMenuBarAdmin />
      </div>
      <div className='body-container'>
        <div className='header-admin'>

          <div className='header-title'>
              <h2>Check Proof </h2>
          </div>

          <div className='header-icon'>
              <img src={notification} className='notificationIcon' alt='notification'></img>
              <img src={home} alt='homebtn' className='homeIcon'></img>
              <img src={logout} alt='logout'className='logout'></img>
              <Link to={"/"} className='logoutbtn'>
                <p>Logout</p>
              </Link>
          </div>

        </div>
        <form>
          <div className='user-details'>
            <div >
              <img src={band} alt='band' className='profile-picture-proofcheck'></img>
            </div>
            <div className="my-form">
              <div >
                <label>
                  Name  :
                  <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
              </div>
              <div>
                <label>
                  Use Code :
                  <input type="text" name="usecode" value={formData.usecode} onChange={handleChange} />
                </label>
              </div>
              <div>
                <label>
                  User Type :
                  <input type="text" name="userType" value={formData.userType} onChange={handleChange} />
                </label>
              </div>
              <div>
                <label>
                  Address  :
                  <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </label>
              </div>
              <div>
                <label>
                  Email   :
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
              </div>
            </div>
          </div>
          <div className='proof'>
            <h1>hiiiii</h1>
          </div>
          <div className="d-flex justify-content-between button-proofcheck">
            <button  type="button" className="btn btn-primary" style={{backgroundColor:'rgb(118, 67, 210)', border:'none'}}><h5>Accept</h5></button>
            <button  type="button" className="btn btn-danger"><h5>Reject</h5></button>
          </div>
        </form>


      </div> 
    </div>
  )
}

export default ProofCheck
