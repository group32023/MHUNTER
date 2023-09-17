import React from 'react'
import { useRef, useState} from 'react'
import "../../assets/css/paymentform.css"


function Payment() {
    const formRef = useRef(null);
    const inputRef = useRef(null);
  
  

    const resetFormFields = () => {
      setEmail("");
      setFullName("");
      setPaymenttype("");
      setAmount("");
      setCardno("");
      setExdate("");
      setCVV("");

    };

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [paymenttype, setPaymenttype] = useState("");
    const [amount, setAmount] = useState("");
    const [cardno, setCardno] = useState("");
    const [exdate, setExdate] = useState("");
    const [cvv, setCVV] = useState("");


    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    const regDate = `${year}-${month}-${day}`;

    //const [showSuccessModal, setShowSuccessModal] = useState(false);

    const save =async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("email", email);
      formData.append("fullName", fullName);
      formData.append("paymenttype", paymenttype);
      formData.append("amount", amount);
      formData.append("cardno", cardno);
      formData.append("exdate", exdate);
      formData.append("cvv", cvv);

      
    }
    
    return (
      <div className='login template d-flex justify-content-center align-items-center vh-100 bgimage'>
        <form ref={formRef} onSubmit={save} className='paymentform_container' enctype="multipart/form-data">
          
              <div className='paymentform_left-box'>
                    <div className='paymentform_-text'>
                      <h4><b>Add your payment details here .</b></h4>
                    </div>
                    <div className='mb-2 text-white paymentform_text-field'>
                      <div style={{padding:'5px'}} >
                        <label htmlFor='FullName'>Full Name</label>
                        <input type='text' placeholder='' className='form-control' required
                    value = {fullName}
                    onChange ={(event) => {
                    setFullName(event.target.value);
                  }}/>
                      </div>
                      
  
                    </div>

                    <div className='mb-2 text-white paymentform_text-field'>
                      <label htmlFor='Email'>Email</label>
                      <input type='email' placeholder='' className='form-control'required
                    value = {email}
                    onChange ={(event) => {
                    setEmail(event.target.value);
                  }}/>
                    </div>

                  <div className='mb-2 text-white paymentform_text-field-new select' style={{ display: 'flex' }}>
                  <div style={{ padding: '5px' }}>
                  <label htmlFor='paymenttype'>Payment Type</label>
                    <select
                     id='paymenttype'
                     className='form-control'
                     required
                      value={paymenttype}
                      onChange={(event) => {
                       setPaymenttype(event.target.value);
                      }}
                      >
                    <option value=''>Select Payment Type</option>
                    <option value='Advanced'>Advanced Payment</option>
                    <option value='full'>Full Payment</option>
                    </select>
                   </div>
                   <div className='mb-2 text-white paymentform_text-field'>

                      <div style={{padding:'5px'}}>
                        <label htmlFor='Amount'>Amount</label>
                        <input type='number' placeholder='' className='form-control' required
                    value = {amount}
                    onChange ={(event) => {
                    setAmount(event.target.value);
                  }}/>
                  </div>
                      </div>
  
                    </div>
                    <div className='mb-2 text-white paymentform_text-field'>
                      <label htmlFor='Cardno'>Card Number</label>
                      <input type='number' placeholder='' className='form-control' required
                    value = {cardno}
                    onChange ={(event) => {
                    setCardno(event.target.value);
                  }}/>
                    </div>
                   
                  <div className='mb-2 text-white paymentform_text-field' style={{display:'flex'}}>
                      <div style={{padding:'5px'}} >
                        <label htmlFor='exdate'>Expiry Date</label>
                        <input type='date' placeholder='' className='form-control' required
                        value = {exdate}
                        onChange ={(event) => {
                        setExdate(event.target.value);
                  }}/>
                      </div>
                      <div style={{padding:'5px'}}>
                      <label htmlFor='cvv'>CVV</label>
                    <input type='number' placeholder='' className='form-control' required
                    value = {cvv}
                    onChange ={(event) => {
                    setCVV(event.target.value);
                  }}/>
                      </div>
  
                    </div>
                    <div className='payment-button' style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type='submit'>Submit Payment</button>
                    </div>

  
                 
  
                  
              </div>
  
    
          
        </form>
      </div>
    );
}

export default Payment
