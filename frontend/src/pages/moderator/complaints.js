import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator'
import Topbar from '../../components/common/Topbar'
import '../../assets/css/moderator/moderatorComplaints.css'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { BsArrowRightCircle} from 'react-icons/bs';
import { BsArrowLeftCircle} from 'react-icons/bs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import band from '../../assets/images/band.jpg'
import ModeratorRegistration from './registration';
import ModeratorComplaints from './complaints';
import ModeratorUserDetails from './userDetails';
import ModeratorDashoboardContent from './moderatorDashoboardContent';
import EventDetails from './eventDetails';
import ModeratorEvent from './event';
import ViewComplaints from './viewComplaints';
import ProofCheck from './ProofCheck';
import Suspenduser from './suspenduser';  

function Complaints() {
    
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
  
    const data = [
      {
        complainId: 'C1001',
        name: 'Karen Smith',
        title: 'Refund Payment',
        date: '2021/07/09',
        status: 'Completed',
      },
      {
        complainId: 'C1002',
        name: 'John Doe',
        title: 'Refund Payment',
        date: '2021/08/15',
        status: 'Pending',
      },
      {
        complainId: 'C1003',
        name: 'Alice Johnson',
        title: 'Refund Payment',
        date: '2021/09/20',
        status: 'Checking',
      },
      {
        complainId: 'C1004',
        name: 'Refund Payment',
        title: 'Late Delivery',
        date: '2021/10/05',
        status: 'Completed',
      },
      {
        complainId: 'C1005',
        name: 'Refund Payment',
        title: 'Wrong Size',
        date: '2021/11/17',
        status: 'Pending',
      },
      {
        complainId: 'C1006',
        name: 'Refund Payment',
        title: 'Billing Issue',
        date: '2021/12/02',
        status: 'Checking',
      },
        {
            complainId: 'C1001',
            name: 'Karen Smith',
            title: 'Refund Payment',
            date: '2021/07/09',
            status: 'Completed',
          },
          {
            complainId: 'C1002',
            name: 'John Doe',
            title: 'Refund Payment',
            date: '2021/08/15',
            status: 'Pending',
          },
          {
            complainId: 'C1003',
            name: 'Alice Johnson',
            title: 'Refund Payment',
            date: '2021/09/20',
            status: 'Checking',
          },
          {
            complainId: 'C1004',
            name: 'Refund Payment',
            title: 'Late Delivery',
            date: '2021/10/05',
            status: 'Completed',
          },
          {
            complainId: 'C1005',
            name: 'Refund Payment',
            title: 'Wrong Size',
            date: '2021/11/17',
            status: 'Pending',
          },
          {
            complainId: 'C1006',
            name: 'Refund Payment',
            title: 'Billing Issue',
            date: '2021/12/02',
            status: 'Checking',
          },
    ];
  
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = data.slice(startIndex, endIndex);
  
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  
  return (
    <>
    <SideMenuBarModerator>
    <Topbar/>
    <div className='moderator-body-container'>

            {/*header icon*/}
            <div className='header-admin'>

                <div className='header-title'>
                    <h1>Complaints</h1>
                </div>

                

            </div>
            
            {/*table*/}
            <table className='data-table-complaints'>
    <thead>
        <tr>
            <th>Complain ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
          {displayedData.map((item, index) => (
            <tr key={index} className='data-row-complaints'>
              <td className='data-name-complaints'>{item.complainId}</td>
              <td className='data-name-complaints'>{item.name}</td>
              <td className='data-name-complaints'>{item.title}</td>
              <td className='data-name-complaints'>{item.date}</td>
              <td className={`data-name-complaints-${item.status}`}>{item.status}</td>
              <td>
                <Link to={`/moderator/complaints/viewComplaints`} className='data-button2'>
                  <button type='button' className='btn btn-primary2'>View</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

</table>
<div className="pagination-wrapper">
  <ReactPaginate
  previousLabel={<BsArrowLeftCircle/>} 
  nextLabel={<BsArrowRightCircle/>}
    pageCount={Math.ceil(data.length / itemsPerPage)}
    onPageChange={handlePageChange}
    containerClassName={'pagination'}
    activeClassName={'active2'}
  />
</div>

        </div> 
        <Routes>
          {/* Nested routes for the Organizer Dashboard */}
          <Route path='/moderator/moderatorDashoboardContent' element={<ModeratorDashoboardContent />}></Route>
          <Route path='/moderator/registration' element={<ModeratorRegistration />}></Route>
          <Route path='/moderator/complaints' element={<ModeratorComplaints />}></Route>
          <Route path='/moderator/complaints/viewComplaints' element={<ViewComplaints />}></Route>

          <Route path='/moderator/userDetails' element={<ModeratorUserDetails />}></Route>
          <Route path='/moderator/event' element={<ModeratorEvent />}></Route>
          <Route path='/moderator/event/eventDetails' element={<EventDetails />}></Route>
          <Route path='/moderator/registration/ProofCheck' element={<ProofCheck />}></Route>
          <Route path='/moderator/registration/Proofcheck/suspenduser' element={<Suspenduser />}></Route>

        </Routes>
      </SideMenuBarModerator>
          </>
  )
}

export default Complaints
