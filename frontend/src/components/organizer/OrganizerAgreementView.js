import React, { useState } from 'react';
import '../../assets/css/OrganizerAgreementView.css';

const OrganizerAgreementView = () => {

    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

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
                        <h2 className="fs-title">Create your account</h2>
                        <h3 className="fs-subtitle">This is step 1</h3>
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
                        <h2 className="fs-title">Social Profiles</h2>
                        <h3 className="fs-subtitle">Your presence on the social network</h3>
                        <input type="text" name="twitter" placeholder="Twitter" />
                        <input type="text" name="facebook" placeholder="Facebook" />
                        <input type="text" name="gplus" placeholder="Google Plus" />
                        <input
                            type="button"
                            className="previous action-button"
                            value="Previous"
                            onClick={prevStep}
                        />
                        <input
                            type="button"
                            className="next action-button"
                            value="Next"
                            onClick={nextStep}
                        />
                    </fieldset>
                )}
                {step === 3 && (
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
                        <input
                            type="submit"
                            className="submit action-button"
                            value="Submit"
                            onClick={(e) => e.preventDefault()} // Prevent actual form submission
                        />
                    </fieldset>
                )}
            </form>
        </div>
    )
}

export default OrganizerAgreementView