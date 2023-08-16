import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import "../../assets/css/OrganizerComplaint.css"
import Topbar from '../../components/common/Topbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import OrganizerDashboard from './OrganizerDashboard';
import OrganizerEventHistory from './OrganizerEventHistory';
import OrganizerProfile from './OrganizerProfile';
import OrganizerEventDashboard from './OrganizerEventDashboard';
import ViewEvents from "./ViewEvents";
import CreateEvent from './CreateEvent';


function OrganizerComplaint() {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [complaints, setComplaints] = useState([])

    const daten = new Date();
    const year = daten.getFullYear();
    const month = String(daten.getMonth() + 1).padStart(2, '0');
    const day = String(daten.getDate()).padStart(2, '0');
  
    const date = `${year}-${month}-${day}`;

    const handleClick = (e) => {
        e.preventDefault()
        const complaint = { title, description,date }
        console.log(complaint)
        fetch("http://localhost:8080/complaint/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(complaint)
        }).then(() => {
            console.log("New Complaint Added")
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/complaint/getAll")
            .then(res => res.json())
            .then((result) => {
                setComplaints(result);
            }
            )
    }, [])

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <SideMenuBarOrganizer>
                <div className='complaint_content_container'>
                    <Topbar />

                    <div className='complaint_content_container_main_row row mt-4 p-3'>
                        <div className='complaintForm col-md-4 p-3 mx-4'>
                            <div className="p-3 ">
                                <p className='fs-5 text-center' style={{ fontFamily: 'MyCustomFont1' }}>Complaint Form</p>
                                <hr></hr>
                                <form className='complaintFormForm ' style={{ fontFamily: 'MyCustomFont' }}>
                                    <div className="mb-3 mt-3">
                                        <label for="title" className="form-label mt-4 fs-6 mx-3">Title</label>
                                        <input type="text" className="form-control text-white" id="title" name="title" required
                                            value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="description" className="form-label mt-3 fs-6 mx-3">Description</label>
                                        <textarea className="form-control mb-5 text-white" id='scrollbarStyle-1' name="description" rows="4" required
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
                            <div className="data-table d-flex justify-content-center text-center fs-6" style={{ fontFamily: 'MyCustomFont' }}>
                                <div className="table-title complaintTableDataRow mb-4" style={{ fontFamily: 'MyCustomFont1' }}>
                                    <div className="complaint-title">Complaint Title</div>
                                    <div className="date">Date</div>
                                    <div className="status">Status</div>
                                </div>
                                {complaints.map(complaint => (
                                    <div className="content-data-row complaintTableDataRow" onClick={handleShowModal}>
                                        <div className="complaint-title">{complaint.title}</div>
                                        <div className="date">{complaint.date}</div>
                                        <div className="status">{complaint.status}</div>
                                    </div>
                                ))}

                                {showModal && (
                                    <div className="overlay">
                                        <Modal show={showModal} onHide={handleCloseModal} centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Popup Title</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                Content of the popup goes here.
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleCloseModal}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>


                <Routes>
                    {/* Nested routes for the Organizer Dashboard */}
                    <Route path='/organizer/dashboard' element={<OrganizerDashboard />}></Route>
                    <Route path='/organizer/event' element={<ViewEvents />}></Route>
                    <Route path='/organizer/event/eventdashboard' element={<OrganizerEventDashboard />}></Route>
                    <Route path='/organizer/event/createevent' element={<CreateEvent />}></Route>
                    <Route path='/organizer/eventhistory' element={<OrganizerEventHistory />}></Route>
                    <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
                    <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>

                </Routes>

            </SideMenuBarOrganizer>
        </>
    )
}

export default OrganizerComplaint