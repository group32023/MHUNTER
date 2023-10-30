import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Tab, Nav } from 'react-bootstrap'

function ArtistInvoiceAgreementModal({ index }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [activeTab, setActiveTab] = useState('details');

    //Hoverable Div

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };


    return (
        <div>
            <Button variant="primary"
                onClick={handleShow}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
            >
                View Details
            </Button>

            {hoveredIndex === index && (
                <div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        bottom: '10%',
                        zIndex: 1000,
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        width: '200px',
                        padding: '10px',
                        borderRadius: '10px',
                    }}
                >
                    Click to see artist/band invoice and agreements
                </div>
            )}

            <Modal show={show} onHide={handleClose} >

                <Modal.Body style={{ backgroundColor: '#1c2126' }}>
                    <div className="container py-2 " style={{ color: 'white' }}>

                        <div className="p-4  rounded shadow mb-3">
                            <Tab.Container activeKey={activeTab} onSelect={key => setActiveTab(key)}>
                                <Nav variant="pills" className="flex-column flex-sm-row text-center border-1 rounded-nav" style={{ backgroundColor: '#1c2126' }}>
                                    <Nav.Item className='mx-2'>
                                        <Nav.Link eventKey="details" >Details</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='mx-2'>
                                        <Nav.Link eventKey="invoice">Invoice</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='mx-2'>
                                        <Nav.Link eventKey="agreement">Agreement</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="details">
                                        <p  >Lorem ipsum dolor sit amet, c</p>
                                        <p   >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="invoice">
                                        <p  >Lorem ipsum dolor sit amet, c</p>
                                        <p   >Lorem culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="agreement">
                                        <p >sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p  >Excepteur sint occaecat cupidatat non proident</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>

                        </div>


                    </div>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Body>

            </Modal>
        </div>
    );
}


export default ArtistInvoiceAgreementModal