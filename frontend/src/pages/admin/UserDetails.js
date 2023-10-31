import React from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin'
import AdminDashboard from './AdminDashboard'
import ProofCheck from './ProofCheck';
import ViewUserDetails from './ViewUserDetails';
import AdminReport from './AdminReport';
import AdminSettings from './AdminSettings';
import Topbar from '../../components/common/Topbar'
import { Link, Routes, Route } from 'react-router-dom';

function UserDetails() {
    const typeA = 'Artist';
    const typeB = 'Band';
    const typeO = 'Organizer';
    const typeM = 'Moderator';
  return (
    <>
    <SideMenuBarAdmin>
    <Topbar/>
    <div className='header-admin'>
      <div className='header-title'>
        <h1>User Details</h1>
      </div>
    </div>

    <div className="row row-userdetails">
        <div className="col-sm-6 col-userdetails">
            <div className="card card-userdetails">
            <div className="card-body text-center">
                <h3 className="card-title text-light">Artists</h3>
                <div className='artist-image'>
                    <img src={require('../../assets/images/artist.jpg')} alt={'artist'} height={150} width={150}/>
                </div>
                <Link  to={`/admin/userdetails/${typeA}`}>
                    <span className='button-userdetails'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>
            </div>
        </div>
        <div className="col-sm-6 col-userdetails">
            <div className="card card-userdetails">
            <div className="card-body text-center">
                <h3 className="card-title text-light">Bands</h3>
                <div className='artist-image'>
                    <img src={require('../../assets/images/band.jpg')} alt={'artist'} height={150} width={150}/>
                </div>
                <Link  to={`/admin/userdetails/${typeB}`}>
                    <span className='button-userdetails'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>
            </div>
        </div>
    </div>

    <div className="row row-userdetails">
        <div className="col-sm-6 col-userdetails">
            <div className="card card-userdetails">
            <div className="card-body text-center">
                <h3 className="card-title text-light">Organizers</h3>
                <div className='artist-image'>
                    <img src={require('../../assets/images/dineshtharanga.jpg')} alt={'artist'} height={150} width={150}/>
                </div>
                <Link  to={`/admin/userdetails/${typeO}`}>
                    <span className=' button-userdetails'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>
            </div>
        </div>
        <div className="col-sm-6 col-userdetails">
            <div className="card card-userdetails">
            <div className="card-body text-center">
                <h3 className="card-title text-light">Moderators</h3>
                <div className='artist-image'>
                    <img src={require('../../assets/images/profilePhoto.jpeg')} alt={'artist'} height={150} width={150}/>
                </div>
                <Link  to={`/admin/userdetails/${typeM}`}>
                    <span className='button-userdetails'><button type='button' className='btn btn-primary'> View </button></span>
                </Link>
            </div>
            </div>
        </div>
    </div>





    <Routes>
          
          <Route path='/admin/admindashobard' element={<AdminDashboard/>} />
          <Route path='/admin/registration/proofcheck' element={<ProofCheck/>} />
          <Route path='/admin/userdetails/viewdetails' element={<ViewUserDetails/>} />
          <Route path='/admin/report' element={<AdminReport/>} />
          <Route path='/admin/settings' element={<AdminSettings/>} />
    </Routes>
    </SideMenuBarAdmin>
    </>
  )
}

export default UserDetails
