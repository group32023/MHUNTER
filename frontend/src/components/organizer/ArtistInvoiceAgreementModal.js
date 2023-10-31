import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Tab, Nav } from 'react-bootstrap';
import '../../assets/css/ArtistInvoiceAgreementModal.css';
import OrganizerAgreementView from './OrganizerAgreementView';
import AgreementDetailProfile from './AgreementDetailProfile';
import OrganizerInvoiceView from './OrganizerInvoiceView';

function ArtistInvoiceAgreementModal(props) {
    const index = props.index;
    const detail0 = props.detail0;
    const detail2 = props.detail2;
    const detail3 = props.detail3;

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
                    <div className="ArtistInvoiceAgreementModalContainer  p-2 " style={{ color: 'white' }} id='scrollbarStyle-12'>

                        <div className="ArtistInvoiceAgreementModalContainer1 p-4  rounded shadow mb-1">
                            <Tab.Container activeKey={activeTab} onSelect={key => setActiveTab(key)} >
                                <Nav variant="pills" className="ArtistInvoiceAgreementModalContainer1Nav py-2 flex-column flex-sm-row text-center border-1 rounded-nav" style={{ backgroundColor: '#1c2126' }}>
                                    <Nav.Item className='col-3 mx-4 ' >
                                        <Nav.Link eventKey="details" >Details</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='col-3 mx-4'>
                                        <Nav.Link eventKey="invoice">Invoice</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='col-3 mx-4'>
                                        <Nav.Link eventKey="agreement">Agreement</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className='ArtistInvoiceAgreementTabContent mt-5 px-4'>
                                    <Tab.Pane eventKey="details">

                                        <AgreementDetailProfile style={{ color: 'black' }} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="invoice">
                                        <OrganizerInvoiceView
                                            detail0={detail0}
                                            detail2={detail2}
                                            detail3={detail3}
                                        />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="agreement">
                                        <OrganizerAgreementView />

                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>

                        </div>


                    </div>

                </Modal.Body>

            </Modal>
        </div>
    );
}


export default ArtistInvoiceAgreementModal