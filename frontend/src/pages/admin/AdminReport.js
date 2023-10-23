import React,{useEffect, useRef,useState} from 'react'
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
import { useReactToPrint } from 'react-to-print';
import axios from 'axios';
import { Payment } from '@mui/icons-material';

function AdminReport() {

  const conponentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: ()=> conponentPDF.current,
    documentTitle: "Anual report",
    onAfterPrint:() => alert("Data saved in PDF")
  });

  const [reportData, setReportData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/getAdminReportData`)
        .then(response => {
            setReportData(response.data);
        })
        .catch(error => {
            console.error(error);
            alert(error);
        });
}, []);



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
          <button className="btn btn-primary" type="button" style={{backgroundColor:'purple'}}>
            Search
          </button>
        </div>
      </div>
    </div>

    <div ref = {conponentPDF} style={{width:'90%'}}>
    <table class="table table-striped table-dark" style={{padding:'10px', margin:'50px'}}>
      <thead>
        <tr>
          <th scope="col">Organizer Name</th>
          <th scope="col">Event Name</th>
          <th scope="col">Payment for MHunter</th>
        </tr>
      </thead>
      {reportData.length > 0 && (
      <tbody>
        {reportData.map((row, index) => (
        <tr key={index}>
          <th scope="row">{row[2]}</th>
          <td>{row[0]}</td>
          <td>{row[1]}</td>
        </tr>
        ))}
      </tbody>
      )}
    </table>
    </div>
    <div style={{display:'flex', justifyContent:'center'}}>     
      <button type="button" class="btn btn-outline-primary" onClick={generatePDF}>Generate Report</button>
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
