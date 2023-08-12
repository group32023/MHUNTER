import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../assets/css/moderator/popup.css'
import { BsFillExclamationCircleFill } from "react-icons/bs";

const Popup = () => {
  const [showModal, setShowModal] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleTextareaChange = (event) => setTextareaValue(event.target.value);

  const handleReject = () => {
    // Handle reject logic here
    console.log('Request rejected with reason:', textareaValue);
    handleCloseModal();
  };

  return (
    <div className="popup-container">
      <Button className="popup-button" onClick={handleShowModal}>
        Reject Request
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="popup-title">
          <BsFillExclamationCircleFill className="icon" />{' '}
            Are you sure you want to reject the request?          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            className="popup-textarea"
            as="textarea"
            value={textareaValue}
            onChange={handleTextareaChange}
            placeholder="Enter reason for rejection..."
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
        
          <Button variant="secondary" className="popup-submit-button" onClick={handleCloseModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Popup;
