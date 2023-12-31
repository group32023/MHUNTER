import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import { BiSolidCheckCircle } from "react-icons/bi";
// import { BiX } from "react-icons/bi";
import "../../assets/css/OrganizerComplaint.css"
import Topbar from '../../components/common/Topbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import OrganizerDashboard from './OrganizerDashboard';
import OrganizerEventDashboard from './OrganizerEventDashboard';
import ViewEvents from './ViewEvents';
import CreateEvent from './CreateEvent';
import ViewEventHistory from './ViewEventHistory';
import OrganizerProfile from './OrganizerProfile';
import SearchArtist from './SearchArtist';
import ViewArtist from './ViewArtist';
import MakeArtistRequest from './MakeArtistRequest';
import SystemPreloader from '../../components/common/SystemPreloader';

import SearchBand from './SearchBand'
import ViewBand from './ViewBand'
import MakeBandRequest from './MakeBandRequest';

function OrganizerComplaint() {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState('');
    const [showSuccessComplaintAddPopup, setShowSuccessComplaintAddPopup] = useState(false);
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    // const [submittedEvent, setSubmittedEvent] = useState(null);
    const [description, setDescription] = useState('');
    const [complaints, setComplaints] = useState([]);
    const [selectedComplaint, setSelectedComplaint] = useState(null);





    const daten = new Date();
    const year = daten.getFullYear();
    const month = String(daten.getMonth() + 1).padStart(2, '0');
    const day = String(daten.getDate()).padStart(2, '0');

    const date = `${year}-${month}-${day}`;
    const orgid = localStorage.getItem('orgid');
console.log('orgid:', orgid); // Check the value in the console

    const handleClick = (e) => {
        e.preventDefault()
        const complaint = { title, description, date, status: "PENDING", orgId: orgid, eventId: selectedEvent };
        console.log(complaint)
        fetch("http://localhost:8080/complaint/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(complaint)
        }).then(() => {
            console.log("New Complaint Added");

            setShowSuccessComplaintAddPopup(true); // Show success popup
            setTimeout(() => {
                setShowSuccessComplaintAddPopup(false); // Hide success popup after a timeout

            }, 3000);

            window.location.reload();
        })
    }


    useEffect(() => {
        fetch(`http://localhost:8080/complaint/complaintByOrgId/${orgid}`)
          .then(res => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then(result => {
            setComplaints(result);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
      



    const handleEventChange = (event) => {
        const selectedEventId = event.target.value;
        setSelectedEvent(selectedEventId);
    };



    useEffect(() => {
        axios.get(`http://localhost:8080/event/byOrgID/${orgid}`)
          .then(response => {
            // Assuming your API returns an array of events
            if (response.data) {
              setEvents(response.data);
            }
          })
          .catch(error => {
            if (error.response) {
              // The request was made, but the server responded with a status code
              // that falls out of the range of 2xx
              console.error('Server responded with an error:', error.response.data);
            } else if (error.request) {
              // The request was made but no response was received
              console.error('No response received from the server:', error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.error('Error setting up the request:', error.message);
            }
          });
      }, []);
      



    const handleShowModal = (complaint) => {
        setSelectedComplaint(complaint);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedComplaint(null);
        setShowModal(false);
    };

    return (
        <>
            <SideMenuBarOrganizer>
                <div className='complaint_content_container'>
                    <Topbar customProp="Complaint" />

                    <div className='complaint_content_container_main_row row mt-2 p-3'>
                        <div className='complaintForm col-md-4 p-3 mx-4'>
                            <div className="p-3 ">
                                <p className='fs-5 text-center' style={{ fontFamily: 'MyCustomFont1' }}>Complaint Form</p>
                                <hr></hr>
                                <form className='complaintFormForm ' style={{ fontFamily: 'MyCustomFont' }}>
                                    <div className="mb-1">
                                        <label className='mt-3 mb-2 fs-6 mx-3'>Select an event:</label>
                                        <select className='complaintSelectEventByName fs-6 ' value={selectedEvent} onChange={handleEventChange} required>
                                            <option value="">Select an event</option>
                                            {events.map((event) => (
                                                <option key={event.eventid} value={event.eventid}>
                                                    {event.event_name}
                                                </option>
                                            ))}
                                        </select>
                                        {/* {selectedEvent && <p>You selected: {selectedEvent}</p>} */}
                                    </div>
                                    <div className="mb-1 ">
                                        <label for="title" className="form-label mt-2 fs-6 mx-3">Title</label>
                                        <input type="text" className="form-control text-white" id="title" name="title" required
                                            value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div className="mb-1">
                                        <label for="description" className="form-label mt-2 fs-6 mx-3">Description</label>
                                        <textarea className="form-control mb-4 text-white" id='scrollbarStyle-1' name="description" rows="4" required
                                            value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                    </div>

                                    <div className="row d-flex justify-content-center align-items-center" style={{ fontFamily: 'MyCustomFont1' }}>
                                        <button type="submit" className="btn btn-primary mx-2" onClick={handleClick}>Submit</button>
                                        <button type='button' className="btn btn-secondary mx-2">Cancel</button>
                                    </div>

                                </form>
                            </div>
                        </div>



                        <div className='complaintTableDiv col-md-7 p-2 mx-4' id='scrollbarStyle-1'>
                            {complaints.length === 0 ? ( // Check if complaints are loading

                                <SystemPreloader />

                            ) : (

                                <div className="organizer-complaint-data-table d-flex justify-content-center text-center fs-6" style={{ fontFamily: 'MyCustomFont' }}>
                                    <div className="table-title complaintTableDataRow mb-4" style={{ fontFamily: 'MyCustomFont1' }}>
                                        <div className="complaint-title">Complaint Title</div>
                                        <div className="date">Date</div>
                                        <div className="status">Status</div>
                                    </div>
                                    {complaints.map((complaint, index) => (
                                        <div className="content-data-row complaintTableDataRow" onClick={() => handleShowModal(complaint)} key={index}>
                                            <div className="complaint-title">{complaint.title}</div>
                                            <div className="date">{complaint.date}</div>
                                            <div className={`status ${complaint.status === "PENDING"
                                                ? "status-text-green"
                                                : complaint.status === "ON-PROGRESS"
                                                    ? "status-text-orange"
                                                    : complaint.status === "CLOSED"
                                                        ? "status-text-red"
                                                        : "status-text-red" // Default class for REJECTED and other statuses
                                                }`}>
                                                {complaint.status}
                                            </div>

                                        </div>
                                    ))}

                                    {showSuccessComplaintAddPopup && (
                                        <div className="complaint-add-success-popup blur-background" style={{ fontFamily: 'MyCustomFont1' }}>

                                            <div className="complaint-add-success-popup-content">
                                                <div className="complaint-add-success-imgbox">
                                                    <BiSolidCheckCircle style={{ fontSize: '140px', color: '#1FE70c' }} />
                                                </div>
                                                <div className="complaint-add-success-title">
                                                    <h3>Success!</h3>
                                                </div>
                                                <p className="complaint-add-success-para" style={{ fontFamily: 'MyCustomFont' }}>Complaint Added Successfully!</p>
                                            </div>


                                        </div>
                                    )}


                                    {showModal && (
                                        <div className="overlay">
                                            <Modal show={showModal} onHide={handleCloseModal} centered className='selectedComplaint-Modal '>
                                                <Modal.Header className='p-4 d-flex justify-content-center text-center' >
                                                    <Modal.Title className=' fs-5 mx-5' style={{ fontFamily: 'MyCustomFont1' }}>Complaint Details</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body className='p-3 mx-3 '>
                                                    {selectedComplaint && (
                                                        <>
                                                            <div className='row '>
                                                                <div className=' row col-md-6'>
                                                                    <p className='  col-md-4'>Date:</p>
                                                                    <p className=' col-md-8'>{selectedComplaint.date}</p>
                                                                </div>
                                                                <div className='row col-md-6'>
                                                                    <p className='  col-md-4'>Status:</p>
                                                                    <p style={{ fontFamily: 'MyCustomFont1' }} className={`status col-md-8 ${selectedComplaint.status === "PENDING"
                                                                        ? "status-text-green"
                                                                        : selectedComplaint.status === "ON-PROGRESS"
                                                                            ? "status-text-orange"
                                                                            : selectedComplaint.status === "CLOSED"
                                                                                ? "status-text-red"
                                                                                : "status-text-red" // Default class for REJECTED and other statuses
                                                                        }`}>{selectedComplaint.status}</p>
                                                                </div>
                                                            </div>
                                                            <div className=''  >
                                                                <p style={{ margin: '5px ', color: '#cccccc' }}>Remark : </p>
                                                                <p style={{ border: '1px solid #2f363e', borderRadius: '10px', padding: '10px' }}>{selectedComplaint.remark}</p>
                                                            </div>

                                                            <div className=''  >
                                                                <p style={{ margin: '5px ', color: '#cccccc' }}>Title : </p>
                                                                <p style={{ border: '1px solid #2f363e', borderRadius: '10px', padding: '10px' }}>{selectedComplaint.title}</p>
                                                            </div>
                                                            <div >
                                                                <p style={{ margin: '5px ', color: '#cccccc' }}>Description:</p>
                                                                <p style={{ border: '1px solid #2f363e', borderRadius: '10px', padding: '10px' }}>{selectedComplaint.description}</p>
                                                            </div>




                                                        </>
                                                    )}
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleCloseModal} style={{ fontFamily: 'MyCustomFont2' }}>
                                                        Close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    )}


                                </div>
                            )}
                        </div>

                    </div>
                </div>


                <Routes>
                    {/* Nested routes for the Organizer Dashboard */}
                    <Route path='/organizer/dashboard' element={<OrganizerDashboard />}></Route>
                    <Route path='/organizer/event' element={<ViewEvents />}></Route>
                    <Route path='/organizer/event/eventdashboard' element={<OrganizerEventDashboard />}></Route>
                    <Route path='/organizer/event/CreateEvent' element={<CreateEvent />}></Route>
                    <Route path='/organizer/eventhistory' element={<ViewEventHistory />}></Route>
                    <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>
                    <Route path='/organizer/searchartist/:eventid' element={<SearchArtist />} />
                    <Route path='/organizer/searchartist/viewartist/:mmid/:eventid' element={<ViewArtist />} />
                    <Route path='/organizer/searchartist/viewartist/makeartistrequest/:mmid/:eventid' element={<MakeArtistRequest />} />
                    <Route path='/organizer/searchband/:eventid' element={<SearchBand />} />
                    <Route path='/organizer/searchband/viewband/:mmid/:eventid' element={<ViewBand />} />
                    <Route path='/organizer/searchband/viewband/makebandrequest/:mmid/:eventid' element={<MakeBandRequest />} />
                </Routes>

            </SideMenuBarOrganizer>
        </>
    )
}

export default OrganizerComplaint