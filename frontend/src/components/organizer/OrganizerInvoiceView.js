import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import '../../assets/css/ArtistInvoiceAgreementModal.css';

const OrganizerInvoiceView = (props) => {

    const detail0 = props.detail0;
    const detail2 = props.detail2;
    const detail3 = props.detail3;
    const [invoice, setInvoice] = useState({});
    const mmid = detail0;
    const eventid = detail2;

    const [musicMember, setMusicMember] = useState({});


    useEffect(() => {

        const apiUrl = `http://localhost:8080/invoice/findAllInInvoice/${mmid}/${eventid}`;

        axios.get(apiUrl)
            .then((response) => {

                setInvoice(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        const apiUrl = `http://localhost:8080/requestMusicMember/musicMemberDetails/${mmid}`;
        axios.get(apiUrl)
            .then((response) => {
                setMusicMember(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="card-header invoice-header">

                    <div className="row">
                        <div className="col-8">
                            <h1>Invoice </h1>
                            <h4 className="text-muted">NO: 554{invoice.invoiceId}/R1 | Date: 01/01/2015</h4>
                        </div>
                        <div className="col-4">
                            <div className="media">
                                <div className="media-left">
                                    <img className="media-object logo" src="https://dummyimage.com/70x70/000/fff&text=ACME" />
                                </div>
                                <ul className="media-body list-unstyled">
                                    <li><strong>{musicMember.userName}</strong></li>
                                    <li>{musicMember.address}</li>
                                    <li>{musicMember.email}</li>
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
                                <strong>{musicMember.userName}</strong>
                            </div>
                            <div>{musicMember.address}</div>
                            <div>{musicMember.email}</div>
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
                                    <td class="left strong">Artist Fee</td>
                                    <td class="left">Fee for the live performance by the bande</td>

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
    )
}

export default OrganizerInvoiceView