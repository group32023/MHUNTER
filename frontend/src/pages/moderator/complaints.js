import React, { useState } from 'react'
import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator'
import Topbar from '../../components/common/Topbar'
import '../../assets/css/moderator/moderatorComplaints.css'

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import band from '../../assets/images/band.jpg'

function AllUserDetails() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearch = () => {
      console.log('Searching for:', searchTerm);
    };
  return (
    <div className='main-container'>
        <div className='side-bar'>

            <SideMenuBarModerator />
        </div>
        <div className='body-container'>

            {/*header icon*/}
            <div className='header-admin'>

                <div className='header-title'>
                    <h1>Complaints</h1>
                </div>

                

            </div>
            
            {/*table*/}
            <table className='data-table'>
    <thead>
        <tr>
            <th>Complain ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>View</th>
        </tr>
    </thead>
    <tbody>
        <tr className='data-row1'>
            <td className='data-name'>C1001</td>
            <td className='data-name'>Karen Smith</td>
            <td className='data-name'>Refund Payment</td>
            <td className='data-name'>2021/07/09</td>
            <td className='data-name-completed'>Completed</td>

         
            <td>
                <Link to={"/moderator/complaints/viewComplaints"} className='data-button'>
                    <button type='button' className='btn btn-primary'>View</button>
                </Link>
            </td>
        </tr>
        <tr className='data-row1'>
            <td className='data-name'>C1001</td>
            <td className='data-name'>Karen Smith</td>
            <td className='data-name'>Refund Payment</td>
            <td className='data-name'>2021/07/09</td>
            <td className='data-name-Pending'>Pending</td>

         
            <td>
                <Link to={"/moderator/complaints/viewComplaints"} className='data-button'>
                    <button type='button' className='btn btn-primary'>View</button>
                </Link>
            </td>
        </tr>
        <tr className='data-row1'>
            <td className='data-name'>C1001</td>
            <td className='data-name'>Karen Smith</td>
            <td className='data-name'>Refund Payment</td>
            <td className='data-name'>2021/07/09</td>
            <td className='data-name-Checking'>Cheking</td>

         
            <td>
                <Link to={"/moderator/complaints/viewComplaints"} className='data-button'>
                    <button type='button' className='btn btn-primary'>View</button>
                </Link>
            </td>
        </tr>
        <tr className='data-row1'>
            <td className='data-name'>C1001</td>
            <td className='data-name'>Karen Smith</td>
            <td className='data-name'>Refund Payment</td>
            <td className='data-name'>2021/07/09</td>
            <td className='data-name-Pending'>Pending</td>

         
            <td>
                <Link to={"/moderator/complaints/viewComplaints"} className='data-button'>
                    <button type='button' className='btn btn-primary'>View</button>
                </Link>
            </td>
        </tr>
        <tr className='data-row1'>
            <td className='data-name'>C1001</td>
            <td className='data-name'>Karen Smith</td>
            <td className='data-name'>Refund Payment</td>
            <td className='data-name'>2021/07/09</td>
            <td className='data-name-completed'>Completed</td>

         
            <td>
                <Link to={"/moderator/complaints/viewComplaints"} className='data-button'>
                    <button type='button' className='btn btn-primary'>View</button>
                </Link>
            </td>
        </tr>
        <tr className='data-row1'>
            <td className='data-name'>C1001</td>
            <td className='data-name'>Karen Smith</td>
            <td className='data-name'>Refund Payment</td>
            <td className='data-name'>2021/07/09</td>
            <td className='data-name-completed'>Completed</td>

         
            <td>
                <Link to={"/moderator/complaints/viewComplaints"} className='data-button'>
                    <button type='button' className='btn btn-primary'>View</button>
                </Link>
            </td>
        </tr>
    </tbody>
</table>

        </div> 
    </div>
  )
}

export default AllUserDetails
