import React, { useState } from 'react'
import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator'
import '../../assets/css/moderator/moderatorComplaints.css'
import Topbar from '../../components/common/Topbar'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import band from '../../assets/images/band.jpg'

function AdminRegistration() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearch = () => {
      console.log('Searching for:', searchTerm);
    };
  return (
   
        <div className='moderator-body-container'>
            {/*header icon*/}
            <Topbar/>

            <div className='header-admin'>

                <div className='header-title'>
                    <h1>Registration</h1>
                </div>

                
            </div>
            {/*search bar*/}
            <div className="container mt-3 search-bar">
                <div className="input-group mb-3">
                    <input
                    type="text"
                    className="form-control "
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    />
                    <div className="input-group-append">
                    <button className="btn btn-primary search-button" type="button" onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    </div>
                </div>
            </div>
            {/*table*/}
            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-memberType'>Artist</span>
                <span className='data-status'>Pending</span>
                <Link to={"/moderator/registration/proofcheck"}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>
            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-memberType'>Artist</span>
                <span className='data-status'>Pending</span>
                <Link to={"/moderator/registration/proofcheck"}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>
            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-memberType'>Artist</span>
                <span className='data-status'>Pending</span>
                <Link to={"/moderator/registration/proofcheck"}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>
            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-memberType'>Artist</span>
                <span className='data-status'>Pending</span>
                <Link to={"/moderator/registration/proofcheck"}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>
            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-memberType'>Artist</span>
                <span className='data-status'>Pending</span>
                <Link to={"/moderator/registration/proofcheck"}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>
            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-memberType'>Artist</span>
                <span className='data-status'>Pending</span>
                <Link to={"/moderator/registration/proofcheck"}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-memberType'>Artist</span>
                <span className='data-status'>Pending</span>
                <Link to={"/moderator/registration/proofcheck"}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-memberType'>Artist</span>
                <span className='data-status'>Pending</span>
                <Link to={"/moderator/registration/proofcheck"}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-memberType'>Artist</span>
                <span className='data-status'>Pending</span>
                <Link to={"/moderator/registration/proofcheck"}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>

        </div> 
  )
}

export default AdminRegistration
