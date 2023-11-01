import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import '../../assets/css/ArtistInvoiceAgreementModal.css';
import { useReactToPrint } from 'react-to-print';

const OrganizerInvoiceView = (props) => {

    const detail0 = props.detail0;
    const detail2 = props.detail2;
    const detail3 = props.detail3;
    const [invoice, setInvoice] = useState({});
    const mmid = detail0;
    const eventid = detail2;

    const [musicMember, setMusicMember] = useState({});

    const componentPDF = useRef();

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "Invoice",
        onAfterPrint: () => alert("Data saved in PDF")
    });


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
            <div className="button-wrapper d-flex mb-3">

                <Button id="myButtonPppp" class="button btn btn-default" onClick={generatePDF}>
                    Print
                    <div class="fill-container"></div>
                </Button>
                <Button id="myButtonPppp" class="button btn btn-default">
                    Paynow
                    <div class="fill-container"></div>
                </Button>
            </div>

            <div className="card" ref={componentPDF}>
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

                    <div class="table-responsive-sm">Description of Services Provided:
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th class="center">#</th>
                                    <th>Item</th>
                                    <th>Description</th>


                                    <th class="right">Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="center">1</td>
                                    <td class="left strong">Artist Fee</td>
                                    <td class="left">Fee for the live performance by the Artist </td>


                                    <td class="right">LKR {invoice.artistFee}</td>
                                </tr>
                                <tr>
                                    <td class="center">2</td>
                                    <td class="left">Band Fee</td>
                                    <td class="left">Fee for the live performance by the Band</td>


                                    <td class="right">LKR {invoice.bandFee}</td>
                                </tr>
                                <tr>
                                    <td class="center">3</td>
                                    <td class="left">Transportation Fee</td>
                                    <td class="left">Cost associated with transporting the band and their equipment </td>


                                    <td class="right">LKR {invoice.transportFee}</td>
                                </tr>
                                <tr>
                                    <td class="center">4</td>
                                    <td class="left">Sound Equipment Fee</td>
                                    <td class="left">Charges for the sound equipment provided for the performance</td>


                                    <td class="right">LKR {invoice.soundFee}</td>
                                </tr>
                                <tr>
                                    <td class="center">5</td>
                                    <td class="left">Instrumental Equipment Fee</td>
                                    <td class="left">Charges for the muusic instrumental equipment</td>


                                    <td class="right">LKR {invoice.instrumentFee}</td>
                                </tr><tr>
                                    <td class="center">6</td>
                                    <td class="left">Other Expenses</td>
                                    <td class="left">Any additional expenses or miscellaneous fees</td>


                                    <td class="right">LKR {invoice.others}</td>
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
                                        <td class="right">{invoice.totalAmount}</td>
                                    </tr>
                                    <tr>
                                        <td class="left">
                                            <strong>Discount</strong>
                                        </td>
                                        <td class="right">{invoice.totalAmount}</td>
                                    </tr>

                                    <tr>
                                        <td class="left">
                                            <strong>Total</strong>
                                        </td>
                                        <td class="right">
                                            <strong>{invoice.totalAmount}</strong>
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
                        <p>Bank Name: [Your Bank Name]<br></br>
                            Account Name: [Your Account Name]<br></br>
                            Account Number: [Your Account Number]<br></br>
                            Routing Number: [Your Routing Number]<br></br>
                            PayPal: [Your PayPal ID]<br></br>

                        </p>

                        <h5>Additional Information</h5><hr></hr>
                        <p>
                            Payment Terms:
                            Please make the payment by the due date mentioned above. You can make the payment via bank transfer or PayPal using the provided information.

                            Thank you for choosing our band and artist for your event. If you have any questions or concerns regarding this invoice, please feel free to contact us at [Your Phone Number] or [Your Email Address].

                            Sincerely,

                            {musicMember.userName}
                        </p>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default OrganizerInvoiceView