import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function EventDashboardImagePopup({ currentImage, onDelete, onSave }) {
    const [show, setShow] = useState(false);
    const [newImage, setNewImage] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setNewImage(file);
    };

    const handleSave = () => {
        onSave(newImage);
        handleClose();
    };

    return (
        <>
            <div className="eventImgDiv col-md-5 mt-2">
                <img alt='' src={currentImage} width='385px' height='110px' />
                <button className="btn btn-link" onClick={handleShow}>
                    Change/Delete Image
                </button>
            </div>

            <Modal show={show} onHide={handleClose} style={{ color: 'white' }}>
                <Modal.Header closeButton>
                    <Modal.Title>Change or Delete Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onDelete}>
                        Delete
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EventDashboardImagePopup