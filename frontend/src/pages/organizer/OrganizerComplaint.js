import React, { useState } from 'react';
import "../../assets/css/OrganizerComplaint.css"
import Topbar from '../../components/common/Topbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function OrganizerComplaint() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
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
                                <input type="text" className="form-control text-white" id="title" name="title" required />
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label mt-3 fs-6 mx-3">Description</label>
                                <textarea className="form-control mb-5 text-white" id='scrollbarStyle-1' name="description" rows="4" required></textarea>
                            </div>
                            <div className="row d-flex justify-content-center align-items-center" style={{ fontFamily: 'MyCustomFont1' }}>
                                <button type="submit" className="btn btn-primary mx-2">Submit</button>
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
                        <div className="content-data-row complaintTableDataRow" onClick={handleShowModal}>
                            <div className="complaint-title">Complaint 1</div>
                            <div className="date">2023-08-07</div>
                            <div className="status">Open</div>
                        </div>
                        <div className="content-data-row complaintTableDataRow" onClick={handleShowModal}>
                            <div className="complaint-title">Complaint 2</div>
                            <div className="date">2023-08-08</div>
                            <div className="status">Closed</div>
                        </div>
                        <div className="content-data-row complaintTableDataRow" onClick={handleShowModal}>
                            <div className="complaint-title">Complaint 3</div>
                            <div className="date">2023-08-09</div>
                            <div className="status">In Progress</div>
                        </div>
                        <div className="content-data-row complaintTableDataRow" onClick={handleShowModal}>
                            <div className="complaint-title">Complaint 1</div>
                            <div className="date">2023-08-07</div>
                            <div className="status">Open</div>
                        </div>
                        <div className="content-data-row complaintTableDataRow" onClick={handleShowModal}>
                            <div className="complaint-title">Complaint 2</div>
                            <div className="date">2023-08-08</div>
                            <div className="status">Closed</div>
                        </div>
                        <div className="content-data-row complaintTableDataRow">
                            <div className="complaint-title">Complaint 3</div>
                            <div className="date">2023-08-09</div>
                            <div className="status">In Progress</div>
                        </div>
                        <div className="content-data-row complaintTableDataRow">
                            <div className="complaint-title">Complaint 1</div>
                            <div className="date">2023-08-07</div>
                            <div className="status">Open</div>
                        </div>
                        <div className="content-data-row complaintTableDataRow">
                            <div className="complaint-title">Complaint 2</div>
                            <div className="date">2023-08-08</div>
                            <div className="status">Closed</div>
                        </div>
                        <div className="content-data-row complaintTableDataRow">
                            <div className="complaint-title">Complaint 3</div>
                            <div className="date">2023-08-09</div>
                            <div className="status">In Progress</div>
                        </div>
                        <div className="content-data-row complaintTableDataRow">
                            <div className="complaint-title">Complaint 1</div>
                            <div className="date">2023-08-07</div>
                            <div className="status">Open</div>
                        </div>
                        <div className="content-data-row complaintTableDataRow">
                            <div className="complaint-title">Complaint 2</div>
                            <div className="date">2023-08-08</div>
                            <div className="status">Closed</div>
                        </div>
                        <div className="content-data-row complaintTableDataRow">
                            <div className="complaint-title">Complaint 3</div>
                            <div className="date">2023-08-09</div>
                            <div className="status">In Progress</div>
                        </div>

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
    )
}

export default OrganizerComplaint