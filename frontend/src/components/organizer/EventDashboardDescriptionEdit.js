import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EventDashboardDescriptionEdit({ description, show, onHide, onSave }) {
    const [modalDescription, setModalDescription] = useState('');

    // Use useEffect to update the modalDescription state when the description prop changes
    useEffect(() => {
        setModalDescription(description);
    }, [description]);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        // Limit the input to 350 characters
        if (inputValue.length <= 350) {
            setModalDescription(inputValue);
        }
    };

    const handleSave = () => {
        onSave(modalDescription);
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} style={{ color: 'white' }} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add Description</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="description">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        value={modalDescription}
                        maxLength={350}
                        onChange={handleChange}
                    />
                    <small>Characters remaining: {350 - modalDescription.length}</small>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EventDashboardDescriptionEdit