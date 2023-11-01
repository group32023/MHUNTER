import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import routing components

import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator'
import Topbar from '../../components/common/Topbar'
import '../../assets/css/moderator/moderatorComplaints.css'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { BsArrowRightCircle} from 'react-icons/bs';
import { BsArrowLeftCircle} from 'react-icons/bs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import band from '../../assets/images/band.jpg';
import ModeratorRegistration from './registration';
import ModeratorComplaints from './complaints';
import ModeratorUserDetails from './userDetails';
// import ModeratorDashoboardContent from './moderatorDashoboardContent';
import EventDetails from './eventDetails';
import ModeratorEvent from './event';
import ViewComplaints from './viewComplaints';
import ProofCheck from './ProofCheck';
import Suspenduser from './suspenduser';

function Complaints() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const [complaints, setComplaints] = useState([]); // State to store fetched data

  const navigate = useNavigate(); // React Router navigation

  // Fetch complaint data from the backend
  useEffect(() => {
    // You can use the fetch API or Axios to make the HTTP GET request
    fetch('http://localhost:8080/complaint/getAll') // Replace with your actual backend endpoint
      .then((response) => response.json())
      .then((data) => setComplaints(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs once on component mount

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = complaints.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Function to handle the "View" button click and pass the complaintID
  const handleViewClick = (complaintID) => {
    navigate(`/moderator/complaints/viewComplaints/${complaintID}`);
  };

  return (
    <>
      <SideMenuBarModerator>
        <Topbar />
        <div className="moderator-body-container">
          {/*header icon*/}
          <div className="header-admin">
            <div className="header-title">
              <h1>Complaints</h1>
            </div>
          </div>

          {/*table*/}
          <table className="data-table-complaints">
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
                <tr key={index} className="data-row-complaints">
                  <td className="data-name-complaints">{item.complaintID}</td>
                  <td className="data-name-complaints">{item.title}</td>
                  <td className="data-name-complaints">{item.date}</td>
                  <td className={`data-name-complaints-${item.status}`}>{item.status}</td>
                  <td>
                    {/* Use the handleViewClick function to handle the link and pass the complaintID */}
                    <button
                      onClick={() => handleViewClick(item.complaintID)}
                      className="data-button2"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination component */}
          <div className="pagination-wrapper">
            <ReactPaginate
              previousLabel={<BsArrowLeftCircle />}
              nextLabel={<BsArrowRightCircle />}
              pageCount={Math.ceil(complaints.length / itemsPerPage)}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active2'}
            />
          </div>
        </div>
      </SideMenuBarModerator>

      {/* Nested routes for the Moderator Dashboard */}
      <Routes>
        {/* <Route path="/moderator/moderatorDashboardContent" element={<ModeratorDashboardContent />} /> */}
        <Route path="/moderator/registration" element={<ModeratorRegistration />} />
        <Route path="/moderator/complaints" element={<ModeratorComplaints />} />
        <Route path="/moderator/complaints/viewComplaints/:complaintID" element={<ViewComplaints />} />
        <Route path="/moderator/userDetails" element={<ModeratorUserDetails />} />
        <Route path="/moderator/event" element={<ModeratorEvent />} />
        <Route path="/moderator/event/eventDetails" element={<EventDetails />} />
        <Route path="/moderator/registration/ProofCheck" element={<ProofCheck />} />
        <Route path="/moderator/registration/ProofCheck/suspenduser" element={<Suspenduser />} />
      </Routes>
    </>
  );
}

export default Complaints;
