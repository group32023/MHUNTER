import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Tab, Nav } from 'react-bootstrap';
import '../../assets/css/ArtistInvoiceAgreementModal.css';

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
                                        <p  >Lorem ipsum dolor sit amet, c</p>
                                        <p   >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="invoice">
                                        <div className="container">
                                            <div className="card">
                                                <div className="card-header invoice-header">

                                                    <div className="row">
                                                        <div className="col-8">
                                                            <h1>Invoice <small>With Credit</small></h1>
                                                            <h4 className="text-muted">NO: 554775/R1 | Date: 01/01/2015</h4>
                                                            <span > <strong>Status:</strong> Pending</span>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="media">
                                                                <div className="media-left">
                                                                    <img className="media-object logo" src="https://dummyimage.com/70x70/000/fff&text=ACME" />
                                                                </div>
                                                                <ul className="media-body list-unstyled">
                                                                    <li><strong>Acme Corporation</strong></li>
                                                                    <li>Software Development</li>
                                                                    <li>Field 3, Moon</li>
                                                                    <li>info@acme.com</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>




                                                </div>
                                                <div class="card-body">
                                                    <div class="row mb-4">
                                                        <div class="col-sm-6">
                                                            <h6 class="mb-3">From:</h6>
                                                            <div>
                                                                <strong>Webz Poland</strong>
                                                            </div>
                                                            <div>Madalinskiego 8</div>
                                                            <div>71-101 Szczecin, Poland</div>
                                                            <div>Email: info@webz.com.pl</div>
                                                            <div>Phone: +48 444 666 3333</div>
                                                        </div>

                                                        <div class="col-sm-6">
                                                            <h6 class="mb-3">To:</h6>
                                                            <div>
                                                                <strong>Bob Mart</strong>
                                                            </div>
                                                            <div>Attn: Daniel Marek</div>
                                                            <div>43-190 Mikolow, Poland</div>
                                                            <div>Email: marek@daniel.com</div>
                                                            <div>Phone: +48 123 456 789</div>
                                                        </div>



                                                    </div>

                                                    <div class="table-responsive-sm">
                                                        <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th class="center">#</th>
                                                                    <th>Item</th>
                                                                    <th>Description</th>

                                                                    <th class="right">Unit Cost</th>
                                                                    <th class="center">Qty</th>
                                                                    <th class="right">Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td class="center">1</td>
                                                                    <td class="left strong">Origin License</td>
                                                                    <td class="left">Extended License</td>

                                                                    <td class="right">$999,00</td>
                                                                    <td class="center">1</td>
                                                                    <td class="right">$999,00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="center">2</td>
                                                                    <td class="left">Custom Services</td>
                                                                    <td class="left">Instalation and Customization (cost per hour)</td>

                                                                    <td class="right">$150,00</td>
                                                                    <td class="center">20</td>
                                                                    <td class="right">$3.000,00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="center">3</td>
                                                                    <td class="left">Hosting</td>
                                                                    <td class="left">1 year subcription</td>

                                                                    <td class="right">$499,00</td>
                                                                    <td class="center">1</td>
                                                                    <td class="right">$499,00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="center">4</td>
                                                                    <td class="left">Platinum Support</td>
                                                                    <td class="left">1 year subcription 24/7</td>

                                                                    <td class="right">$3.999,00</td>
                                                                    <td class="center">1</td>
                                                                    <td class="right">$3.999,00</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-4 col-sm-5">

                                                        </div>

                                                        <div class="col-lg-4 col-sm-5 ml-auto">
                                                            <table class="table table-clear">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="left">
                                                                            <strong>Subtotal</strong>
                                                                        </td>
                                                                        <td class="right">$8.497,00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="left">
                                                                            <strong>Discount (20%)</strong>
                                                                        </td>
                                                                        <td class="right">$1,699,40</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="left">
                                                                            <strong>VAT (10%)</strong>
                                                                        </td>
                                                                        <td class="right">$679,76</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="left">
                                                                            <strong>Total</strong>
                                                                        </td>
                                                                        <td class="right">
                                                                            <strong>$7.477,36</strong>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="columns card-footer row">
                                                    <div className='col-9'>
                                                        <h5>Payment Information</h5>
                                                        <p>Credit Card<br></br>
                                                            Card Type: Visa<br></br>
                                                            &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 1234
                                                        </p>
                                                    </div>
                                                    <div className='col-3'>
                                                        <Button >Pay Now</Button>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="agreement">
                                        <p >sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p  >Excepteur sint occaecat cupidatat non proident</p>
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