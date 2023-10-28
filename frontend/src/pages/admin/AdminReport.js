import React from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin'
import '../../assets/css/admin/adminDashboard.css'
import { Link, Route, Routes } from 'react-router-dom';

import AdminDashboard from './AdminDashboard'
import AdminRegistration from './AdminRegistration';
import ProofCheck from './ProofCheck';
import AllUserDetails from './AllUserDetails';
import ViewUserDetails from './ViewUserDetails';
//import AdminReport from './AdminReport';
import AdminSettings from './AdminSettings';
import Topbar from '../../components/common/Topbar'

function AdminReport() {
  return (
    <>
    <SideMenuBarAdmin>
    <Topbar/>
    <div className='header-admin'>
        <div className='header-title'>
            <h1>Report</h1>
        </div>
    </div>

    <div className="container mt-3" style={{display:'flex', justifyContent:'center'}}>
      <div className="input-group" style={{width:'500px', padding:'10px'}}>
        <input
          type="text"
          id="start-datepicker"
          className="form-control"
          placeholder="Start Date"
        />
        <input
          type="text"
          id="end-datepicker"
          className="form-control"
          placeholder="End Date"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </div>
      </div>
    </div>


    <table class="table table-striped table-dark" style={{padding:'10px', margin:'50px'}}>
      <thead>
        <tr>
          <th scope="col">User Name</th>
          <th scope="col">User Type</th>
          <th scope="col">Payment</th>
          <th scope="col">Payment Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Theekshana Anuradha</th>
          <td>Artist</td>
          <td>100 000.00</td>
          <td>2023-08-20</td>
        </tr>
        <tr>
          <th scope="row">shehan Mihiranga</th>
          <td>Artist</td>
          <td>100 000.00</td>
          <td>2023-07-12</td>
        </tr>
        <tr>
          <th scope="row">Daddy Band</th>
          <td>Band</td>
          <td>200 000.00</td>
          <td>2023-09-23</td>
        </tr>
      </tbody>
    </table>
    <div style={{display:'flex', justifyContent:'center'}}>     
      <button type="button" class="btn btn-outline-primary">Generate Report</button>
    </div>
    <Routes>        
          <Route path='/admin/admindashobard' element={<AdminDashboard/>} />
          <Route path='/admin/registration' element={<AdminRegistration/>} />
          <Route path='/admin/registration/proofcheck' element={<ProofCheck/>} />
          <Route path='/admin/userdetails' element={<AllUserDetails/>} />
          <Route path='/admin/userdetails/viewdetails' element={<ViewUserDetails/>} />
          <Route path='/admin/report' element={<AdminReport/>} />
          <Route path='/admin/settings' element={<AdminSettings/>} />
    </Routes>
    </SideMenuBarAdmin>
    </>
  )
}

export default AdminReport
