/* eslint-disable react/jsx-no-undef */
import React,{useState, useEffect,useRef,Lable} from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistInvoice.css'
import '../assets/css/artistPendingRequests.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';
import CurrencyInput from 'react-currency-input-field';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays,faClock} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Label } from '@mui/icons-material';




export default function BandInvoice() {
  const { id } = useParams();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    // Fetch the data from the Java backend
    fetch(`http://localhost:8080/event/viewSpecificEvent/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
     
      .then((data) => {
        setEvent(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
      console.log(event);

  }, []);


  const [bandFee,setBandFee] = useState(0.00);
  const [artistFee,setArtistFee] = useState(0.00);
  const [soundFee,setSoundFee] = useState(0.00);
  const [instrumentFee,setInstrumentFee] = useState(0.00);
  const [transportFee,setTransportFee] = useState(0.00);
  const [others,setOthers] = useState(0.00);
  const [totalAmount,setTotalAmount] = useState(0.00);
  const [paymentType, setpaymentType]=useState("Full")

 

  // Event handler for checkbox change
  const handleCheckboxChange = () => {
    
    setpaymentType("Advanced");
    
  }

  // var totalAmountofInvoice = bandFee+soundFee+instrumentFee+transportFee+others;
  // setTotalAmount(totalAmountofInvoice);


  const addInvoice=(e)=>{
    e.preventDefault();
    const invoice = {artistFee,bandFee,soundFee,instrumentFee,transportFee,others,totalAmount,paymentType}
    console.log(invoice)

    
    // eslint-disable-next-line react-hooks/rules-of-hooks
  // eslint-disable-next-line react-hooks/rules-of-hooks
  


    fetch("http://localhost:8080/invoice/add",{
      method:"POST",
      headers:{"Content-Type" : "application/json"},
      body:JSON.stringify(invoice)
    }).then(()=>{

        console.log("New Student Added")
      })
     
      }
  

      useEffect(() => {
        var totalAmountofInvoice = artistFee+ bandFee + soundFee + instrumentFee + transportFee + others;
        //console.log(typeof(bandFee))
        setTotalAmount(totalAmountofInvoice);
      }, [artistFee, bandFee, soundFee, instrumentFee, transportFee, others]);



      
 // eslint-disable-next-line no-restricted-globals
 if(event===null) return <div>Loading....................</div>
 
     
  return (

   
    
    <div className='MainContainer'>
        <div className='artistSideBar'>
            <SideMenuBarArtist></SideMenuBarArtist>
            <h3 className='headerDashboard'>Pending Requests</h3>
            <div className='notificationBg'></div>
            <div className='homeBg'></div>
            <div className='logoutBg'></div>
        </div>
        <div className='eventDetailsDisplayContainer'>
             <div className='eventDetailsDisplayInnerContainer'>
             <img src={profileImage} className="profileInvoice"></img>
             <h4>{event['organizerName']}</h4>
            
            <p class="eventType3"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest3"/>{event['eventName']}</p>
            <p class="eventDate3"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest3"/>{event['date']}</p>
            <p class="venue3"><FontAwesomeIcon icon={faClock} id="LocationIconPendingRequest3"/> {event['startTime']}</p>
            <p class="eventType4"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest4"/>{event['duration']}</p>
            <p class="eventDate4"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest4"/>{event['crowd']}</p>
            <p class="venue4"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest4"/> {event['place']}</p>

        
             </div>
        </div>

        <div className='InvoiceContainer'>
            <h1>Invoice</h1>
           
           <div className='invoiceFees'>
            
            <div className='DescriptionLable'>
            <label for='description' className='label1'>Description</label>
            <label for='bandFee' className='label2'>Artist Fee</label>
            <label for='soundFee' className='label3'>Transport Fee</label>
            <label for='others' className='label6'>Others</label>
            </div>
            
            <div className='AmountLabel'>
            <label for='amount' className='label7'>Amount(Rs.)</label>


            <form onSubmit={addInvoice}>

            <input type="number" min="0.00" max="100000000000000000.00" step="0.01" placeholder="0.00"
            defaultValue={'0.00'} decimalsLimit={2} className='currency-input1' value={artistFee} onChange={(e)=>{setArtistFee(parseFloat(e.target.value));}
            }/>
            <input type="number" min="0.00" max="100000000000000000.00" step="0.01" placeholder="0.00"
            defaultValue={'0.00'} decimalsLimit={2} className='currency-input2' value={transportFee} onChange={(e)=>setTransportFee(parseFloat(e.target.value))}/>
           
            <input type="number" min="0.00" max="100000000000000000.00" step="0.01" placeholder="0.00"
            defaultValue={'0.00'} decimalsLimit={2} className='currency-input5' value={others} onChange={(e)=>setOthers(parseFloat(e.target.value))}/>
           
           <input type="checkbox" id="advanced" name="advanced" onChange={handleCheckboxChange}/>
          <label for="advancedpayment" className='advancedpayment'>Advanced is required.</label>

            <button type='submit' className='submitInvoice'>Submit</button>
            </form>
            </div>
            </div>
      <hr className='HrTag'></hr>
      <label for='ttalAmount' className='totalAmount'>Total Amount</label>
      <label for='displayTotalAmount' className='displayTotalAmount'>{totalAmount}</label>

     
      
      <button className='backInvoice'>Back</button>

          
        </div>
        
        
    </div>
  )
}

