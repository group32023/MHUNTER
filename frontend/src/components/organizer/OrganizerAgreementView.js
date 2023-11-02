import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../assets/css/OrganizerAgreementView.css';
import SignatureCanvas from 'react-signature-canvas';

const OrganizerAgreementView = (props) => {

    const detail0 = props.detail0;
    const detail2 = props.detail2;
    const detail3 = props.detail3;



    const mmid = detail0;
    const eventid = detail2;

    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);

    };

    const [data, setData] = useState(null);

    const [sign, setSign] = useState(null);

    const Generate = () => {
        // You can generate the signature data and handle it here
        if (sign) {
            const signatureDataURL = sign.toDataURL();
            // You can use the `signatureDataURL` as needed, e.g., send it to the server or store it in your component's state.
            console.log('Signature Data URL:', signatureDataURL);
        }
    };

    const clear = () => {
        if (sign) {
            sign.clear();
        }
    };

    useEffect(() => {

        axios
            .get(`http://localhost:8080/bandAgreement/findAllInAgreement/${mmid}/${eventid}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="form_holder">

            <form id="msform">
                <ul id="progressbar">
                    <li className={step === 1 ? 'active' : ''}>Read Agreement</li>
                    <li className={step === 2 ? 'active' : ''}>Sign</li>
                    <li className={step === 3 ? 'active' : ''}>Submit</li>
                </ul>
                {step === 1 && (
                    <fieldset>
                        {data ? ( // Check if data is not null
                            <div className="card-header invoice-header">
                                <div className="row" style={{ color: 'black' }}>
                                    <div className="col-8">
                                        <h2 className="">AGREEMENT </h2>
                                        <h4 className=" text-muted">NO: 554{data.agreement_id}/R1 | Date: {data.date}</h4>
                                    </div>
                                </div>

                                <div style={{ color: 'black' }}><h5>TERM OF AGREEMENT</h5><br></br>
                                    - This Agreement shall be effective on the date of the signing of this Agreement (hereinafter
                                    referred to as the “Effective Date”) .
                                    - Upon the end of the term of the Agreement, this Agreement will not be automatically
                                    renewed for a new term.
                                    <br></br>
                                    <h5>RELATIONSHIP OF THE PARTIES</h5>
                                    - Hereby, the Parties agree that this is a non-exclusive agreement and that the Parties are
                                    regarded as independent contractors.
                                    <br></br>
                                    <h5>CONFIDENTIALITY</h5>
                                    - All terms and conditions of this Agreement and any materials provided during the term of the
                                    Agreement must be kept confidential by the Service Provider, unless the disclosure is required
                                    pursuant to the process of law.
                                    - Disclosing or using this information for any purpose beyond the scope of this Agreement, or
                                    beyond the exceptions set forth above, is expressly forbidden without the prior consent of the
                                    Client.
                                    <br></br>
                                    <h5>TERMINATION</h5>
                                    - This Agreement may be terminated as follows:

                                    - In addition, the Client will be responsible to pay for all the Services that have been
                                    successfully performed up to the date of termination of this Agreement apart from the case
                                    where the Service Provider breached this Agreement</div>



                            </div>
                        ) : (
                            <p>Loading data...</p> // Render a loading message or handle the loading state as needed
                        )}

                        <input
                            type="button"
                            className="next action-button"
                            value="Next"
                            onClick={nextStep}
                        />
                    </fieldset>
                )}

                {step === 2 && (
                    <fieldset>
                        <h2 className="fs-title">E-Signature</h2>
                        <h3 className="fs-subtitle">Sign the agreement</h3>

                        <div className="canvasforSignature" style={{ border: "2px solid #ffffff", position: "relative", width: 300, height: 150 }}>
                            <SignatureCanvas
                                canvasProps={{ width: 300, height: 150, className: 'sigCanvas' }}
                                ref={(ref) => setSign(ref)}
                                required
                            />

                            <button type="button" onClick={Generate} className="setUrl">
                                Set
                            </button>

                            <button type="button" className="clearBtn" onClick={clear}>
                                Clear
                            </button>
                        </div>


                        <p className="signatureLabel">* Insert Signature and press Set button.</p>


                        <input
                            type="button"
                            className="previous action-button"
                            value="Previous"
                            onClick={prevStep}
                        />
                        <input
                            type="submit"
                            className="submit action-button"
                            value="Submit"
                            onClick={(e) => e.preventDefault()} // Prevent actual form submission
                        />
                    </fieldset>
                )}
                {/* {step === 3 && (
                    <fieldset>
                        <h2 className="fs-title">Personal Details</h2>
                        <h3 className="fs-subtitle">We will never sell it</h3>
                        <input type="text" name="fname" placeholder="First Name" />
                        <input type="text" name="lname" placeholder="Last Name" />
                        <input type="text" name="phone" placeholder="Phone" />
                        <textarea name="address" placeholder="Address"></textarea>
                        <input
                            type="button"
                            className="previous action-button"
                            value="Previous"
                            onClick={prevStep}
                        />
                        
                    </fieldset>
                )} */}
            </form>
        </div>
    )
}

export default OrganizerAgreementView