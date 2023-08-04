import React, { useRef, useState } from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin'
import '../../assets/css/admin/adminDashboard.css'
import notification from '../../assets/images/notification-a.png'
import home from '../../assets/images/home-button-a.png'
import logout from '../../assets/images/logout-a.png'
import band from '../../assets/images/band.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';


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

  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () =>{
    inputRef.current.click();
  }
  const handleImageChange = (event) =>{
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  }

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
              <table>
                <tr>
                  <td className='label'>Name  :</td>
                  <td><input type="text" name="name" value={formData.name} onChange={handleChange} /></td>
                </tr>

                <tr>
                  <td className='label'>User Code :</td>
                  <td><input type="text" name="usecode" value={formData.usecode} onChange={handleChange} /></td>
                </tr>

                <tr>
                  <td className='label'>User Type :</td>
                  <td><input type="text" name="userType" value={formData.userType} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td className='label'>Address  :</td>
                  <td><input type="text" name="address" value={formData.address} onChange={handleChange} /></td>

                </tr>

                  <td className='label'>Email   :</td>
                  <td><input type="email" name="email" value={formData.email} onChange={handleChange} /></td>
              </table>
            </div>
          </div>
          <div className='proof'>
            <span className='label' style={{fontSize:'larger'}}>Proof :</span>
            <span className='proof-file'>
                  <div onClick={handleImageClick}>
                  {image ? 
                    <img src={URL.createObjectURL(image)} alt="Proof" height={150} width={150}/>
                  :
                    <FontAwesomeIcon icon={faUpload} size="5x" className='upload-icon' />
                  }
                  <input 
                    type='file' 
                    ref={inputRef} 
                    onChange={handleImageChange} 
                    style={{display:'none'}}
                  />  
                  </div>
            </span>
            <span className='proof-file'>
                  <div  onClick={handleImageClick}> 
                    {image ? 
                      <img src={URL.createObjectURL(image)} alt="proof" height={150} width={150}/>
                    :
                    <FontAwesomeIcon icon={faUpload} size="5x" className='upload-icon' />
                    }
                    <input 
                      type='file' 
                      ref={inputRef} 
                      onChange={handleImageChange} 
                      style={{display:'none'}}
                    />  
                  </div>
            </span>
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
