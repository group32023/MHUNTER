/* eslint-disable react/jsx-no-undef */
import React,{useState, useEffect,useRef,Lable} from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistInvoice.css'
import '../assets/css/artistPendingRequests.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';
import crowd from '../assets/images/people.png';
import duration from '../assets/images/hourglass.png';
import eventtype from '../assets/images/eventtype.png';
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'
import CircularProgress from '@mui/material/CircularProgress';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



import Topbar from '../components/common/Topbar';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays,faClock} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Label } from '@mui/icons-material';




export default function BandInvoice() {
    const [confirmationStatus,setConfirmationStatus] = useState(0);
    let navigate = useNavigate();
  const { id,mmid } = useParams();
  const [event, setEvent] = useState([]);
  const [expand,setExpandedSideBar] = useState(true)
  const [invoiceId,setInvoiceId] = useState(0);
  const BASE_URL = "http://localhost:8080";


  const eventid=id;
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
  const [additionalNote, setAdditionalNote]=useState("")

  const [showSuccessComplaintAddPopup, setShowSuccessComplaintAddPopup] = useState(false);

  const orgId= event['orgId'];

  // Event handler for checkbox change
  const handleCheckboxChange = () => {
    
    setpaymentType("Advanced");
    
  }

  const [showModal, setShowModal] = useState(false);
  const [showAcceptRequestModal, setShowAcceptRequestModal] = useState(false);


  const handleShowModal = () => {
      setShowModal(true);
  };

  const handleCloseModal = () => {
      setShowModal(false);
      navigate('/artist/PendingRequests');

  };
  const handleCloseModalAndAccept = () => {
    setShowModal(false);
    setShowAcceptRequestModal(true);
    
    fetch(`http://localhost:8080/sendMail/send/${orgId}/${eventid}/${mmid}`,{
      method:"PUT"
    })
    .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response JSON if needed
      })
      .then((data) => {
        // Handle a successful response here
        console.log('User status updated successfully', data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error updating user status', error);
      });
  
};
const extractloc = (location) => {

  const parts = location.split(',');
  const placeName = parts[0];
  const town = parts[parts.length - 2];
  const stringPart = town.replace(/\d+/g, '');
  return `${stringPart}`;
}



const handleCloseAcceptRequestModal=()=>{
  setShowAcceptRequestModal(false);

  const bookedlist = {orgId,eventid,mmid,invoiceId};

  console.log(bookedlist);

  fetch("http://localhost:8080/requestsLog/save",{
    method:"POST",
    headers:{"Content-Type" : "application/json"},
    body:JSON.stringify(bookedlist)
    
  }).then(()=>{

    fetch(`http://localhost:8080/requestMusicMember/update/${mmid}/${id}`,{
      method:"PUT"
    })
    .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response JSON if needed
      })
      .then((data) => {
        // Handle a successful response here
        console.log('User status updated successfully', data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error updating user status', error);
      });
  });





  setBandFee(0.00);
  setArtistFee(0.00)
  setTransportFee(0.00)
  setOthers(0.00)
  setInstrumentFee(0.00)
  setTotalAmount(0.00)
  setSoundFee(0.00)
  navigate('/artist/PendingRequests');


};

 
  const addInvoice=(e)=>{
    e.preventDefault();
    const invoice = {artistFee,bandFee,soundFee,instrumentFee,transportFee,others,totalAmount,paymentType,eventid,mmid,additionalNote} 

    if(artistFee===0.00 && bandFee===0.00 && transportFee===0.00 && soundFee===0.00 && instrumentFee===0.00 && others===0.00){

    }
    else if(artistFee>=0.00 && bandFee>=0.00 && transportFee>=0.00 && soundFee>=0.00 && instrumentFee>=0.00 && others>=0.00){
       fetch("http://localhost:8080/invoice/add",{
          method:"POST",
          headers:{"Content-Type" : "application/json"},
          body:JSON.stringify(invoice)
        }).then(()=>{
         
          fetch(`http://localhost:8080/invoice/findInvoice/${mmid}/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
           
            .then((data) => {
              setInvoiceId(data);
              
      
            })
            .catch((error) => {
              console.log('Error fetching data :', error);
            });

          handleShowModal()




            })
    }
    

   
     
      }
  

      useEffect(() => {
        var totalAmountofInvoice = artistFee+ bandFee + soundFee + instrumentFee + transportFee + others;
        //console.log(typeof(bandFee))
        setConfirmationStatus(1);
        setTotalAmount(totalAmountofInvoice);
      }, [artistFee, bandFee, soundFee, instrumentFee, transportFee, others, confirmationStatus]);


      const load=(id)=>{
        navigate(`/artist/PendingRequestView/${id}`);
    
      }
     
      

      const loadInvoicePreview=(id)=>{
        navigate(`/band/invoicePreview`);
      
      }
 // eslint-disable-next-line no-restricted-globals
 if(event===null) return <div><CircularProgress color="secondary" /></div>
 
     
  return (

   
    
    <div >
    
        <SideMenuBarArtist>
      
            <p className='headerDashboard'>Invoice</p>
            <Topbar></Topbar>

    <div className='MainContainer'>
        <div className='eventDetailsDisplayContainer'>
             <div className='eventDetailsDisplayInnerContainer'>
             <img src={`${BASE_URL}/postData/uploads/image/${event["organizerImage"]}`} className="profileInvoice"></img>
             <h4>{event['organizerName']}</h4>

            <p class="eventType3"><img src={eventtype} className="EventIconPendingRequest3"></img>Event Name : {event['eventName']}</p>
            <p class="eventDate3"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest3"/>Date : {event['date']}</p>
            <p class="venue3"><FontAwesomeIcon icon={faClock} id="LocationIconPendingRequest3"/> Time : {event['startTime']}</p>
            <p class="eventType4"><img src={duration} className="EventIconPendingRequest4"></img>Duration : {event['duration']}</p>
            <p class="eventDate4"><img src={crowd} className="CalenderIconPendingRequest4"></img>Crowd : {event['crowd']}</p>
            <p class="venue4"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest4"/>Venue : {event["place"]}</p>

        
             </div>
        </div>

        <div className='InvoiceContainer'>
           
           
           <div className='invoiceFees'>
            
            <div className='DescriptionLable'>
            <label for='description' className='label1'>Description</label>
            <label for='bandFee' className='label2'>Artist Fee</label>
            <label for='soundFee' className='label3'>Transport Fee</label>
            <label for='others' className='label6'>Others</label>
            </div>
            
            <div className='AmountLabel'>
            <label for='amount' className='label7'>Amount (Rs.)</label>


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
          <lable className="additionalnotes">Bank Details : </lable><input type='text' id="advanced8" name="advanced" placeholder="BankName,AccNo,Branch" value={additionalNote} onChange={(e)=>setAdditionalNote(e.target.value)}></input>


            <button type='submit' className='submitInvoice' >Submit</button>
            </form>
            </div>
            </div>
      <hr className='HrTag'></hr>
      <label for='ttalAmount' className='totalAmount'>Total Amount</label>
      <label for='displayTotalAmount' className='displayTotalAmount'>{totalAmount}</label>

     
      
      <button type='button' className='previewAgreement' >Preview</button>
      <button className='backInvoice'>Back</button>


    </div>   
        </div>
 

                   
                                {showModal && (
                                    <div className="complaint-add-success-popup blur-background" style={{ fontFamily: 'MyCustomFont1' }}>

                                        <div className="complaint-add-success-popup-content">
                                           
                                            <p className="complaint-add-success-para_for_request_acception">Do You Want to Accept the Request?</p>
                                            <Button className='RequestacceptBtn' onClick={handleCloseModalAndAccept}>
                                        Accept
                                    </Button>
                                            <Button className='RequestCloseBtn' onClick={handleCloseModal}>
                                        Exit
                                    </Button>
                                        </div>


                                    </div>
                                )}


                                
                                {showAcceptRequestModal && (
                                    <div className="complaint-add-success-popup blur-background" style={{ fontFamily: 'MyCustomFont1' }}>

                                        <div className="complaint-add-success-popup-content">
                                           
                                            <p className="complaint-add-success-para_for_request_acception">Request Accept successfully!</p>
                                          
                                            <Button className='RequestCloseBtn' onClick={handleCloseAcceptRequestModal}>
                                        Exit
                                    </Button>
                                        </div>


                                    </div>
                                )}


                                
        </SideMenuBarArtist>
        
    </div>
  )
}

