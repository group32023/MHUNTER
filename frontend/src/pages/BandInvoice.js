/* eslint-disable react/jsx-no-undef */
import React,{useState, useEffect,useRef,Lable} from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import SideMenuBarBand from '../components/common/SideMenuBar/SideMenuBarBand'
import '../assets/css/bandInvoice.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';
import CurrencyInput from 'react-currency-input-field';
import crowd from '../assets/images/people.png';
import duration from '../assets/images/hourglass.png';
import eventtype from '../assets/images/eventtype.png';
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'
import Button from 'react-bootstrap/Button';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Label } from '@mui/icons-material';
import Topbar from '../components/common/Topbar';




export default function BandInvoice() {
  const { id,mid,skip } = useParams();
  const [event, setEvent] = useState([]);
  const [updateRequest,setUpdateRequest] = useState([]);
  const [expand,setExpandedSideBar] = useState(true)
  const [bandFee,setBandFee] = useState(0.00);
  const [artistFee,setArtistFee] = useState(0.00);
  const [soundFee,setSoundFee] = useState(0.00);
  const [instrumentFee,setInstrumentFee] = useState(0.00);
  const [transportFee,setTransportFee] = useState(0.00);
  const [others,setOthers] = useState(0.00);
  const [totalAmount,setTotalAmount] = useState(0.00);
  const [paymentType, setpaymentType]=useState("Full")
  const [invoiceId,setInvoiceId] = useState(0);
  const mmid=mid;
  const eventid=id;
  const [agreementId, setAgreementId]=useState(0)
  const [additionalNote, setAdditionalNote]=useState("")

  const extractloc = (location) => {

    const parts = location.split(',');
    const placeName = parts[0];
    const town = parts[parts.length - 2];
    const stringPart = town.replace(/\d+/g, '');
    return `${stringPart}`;
}

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
        console.log('Error fetching data :', error);
      });
   

     if(skip==="skip"){
         setAgreementId(0);
     }
     else{

      fetch(`http://localhost:8080/bandAgreement/findAgreement/${mid}/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
       
        .then((data) => {
          setAgreementId(data);
          
  
        })
        .catch((error) => {
          console.log('Error fetching data :', error);
        });

     }


     
     

  }, []);

  // Event handler for checkbox change
  const handleCheckboxChange = () => {
    
    setpaymentType("Advanced");
    
  }

  const [showModal, setShowModal] = useState(false);
  const [showAcceptRequestModal, setShowAcceptRequestModal] = useState(false);
  const orgId=event['orgId'];

  const handleShowModal = () => {
    setShowModal(true);
};

const handleCloseModal = () => {
    setShowModal(false);
    navigate('/band/PendingRequests');

};
const handleCloseModalAndAccept = () => {
  setShowModal(false);
  setShowAcceptRequestModal(true);
 

  
};


const handleCloseAcceptRequestModal=()=>{
setShowAcceptRequestModal(false);

const bookedlist = {agreementId,orgId,eventid,mmid,invoiceId};

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
navigate('/band/PendingRequests');


};


  const addInvoice=(e)=>{
    e.preventDefault();
    const invoice = {bandFee,soundFee,instrumentFee,transportFee,others,totalAmount,paymentType,eventid,mmid,additionalNote}
    console.log(invoice)

    

    
 


  if(artistFee===0.00 && bandFee===0.00 && transportFee===0.00 && soundFee===0.00 && instrumentFee===0.00 && others===0.00){

     console.log("wrong");
  }
  else if(artistFee>=0.00 && bandFee>=0.00 && transportFee>=0.00 && soundFee>=0.00 && instrumentFee>=0.00 && others>=0.00){
      
    fetch("http://localhost:8080/invoice/add",{
          method:"POST",
          headers:{"Content-Type" : "application/json"},
          body:JSON.stringify(invoice)
        }).then(()=>{
         
          fetch(`http://localhost:8080/invoice/findInvoice/${mid}/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
           
            .then((data) => {
              console.log(data)
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
        var totalAmountofInvoice = bandFee + soundFee + instrumentFee + transportFee + others;
        //console.log(typeof(bandFee))
        setTotalAmount(totalAmountofInvoice);
      }, [bandFee, soundFee, instrumentFee, transportFee, others]);



let navigate = useNavigate();
const loadInvoicePreview=(id,mmid)=>{

    navigate(`/band/invoicePreview/${id}/${mmid}`,{state:{bandfee:bandFee, soundfee:soundFee, instrumentfee:instrumentFee, transportfee:transportFee, other:others, totalAmount:totalAmount}});

}

      
 // eslint-disable-next-line no-restricted-globals
 if(event===null) return <div>Loading....................</div>
 
 
     
  return (

   
    
    <div >
       <SideMenuBarBand>
        <div>
            <p className='headerDashboard'>Invoice</p>
            <Topbar></Topbar>
          </div>
          <div className='eventDetailsDisplayContainer'>
             <div className='eventDetailsDisplayInnerContainer1'>
             <img src={profileImage} className="profileInvoice"></img>
             <h5 id='bandOrganizer'>{event['organizerName']}</h5>
            
            <p class="eventType1"><img src={eventtype} className="EventIconPendingRequest3"></img>{event['eventName']}</p>
            <p class="eventDate1"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest3"/>{event['date']}</p>
            <p class="venue1"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest3"/> {event['startTime']}</p>
            <p class="eventType2"><img src={duration} className="EventIconPendingRequest4"></img>{event['duration']}</p>
            <p class="eventDate2"><img src={crowd} className="CalenderIconPendingRequest4"></img>{event['crowd']}</p>
            <p class="venue2"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest4"/> {event["place"]}</p>
           
        
             </div>
        </div>

        <div className='InvoiceContainer'>
            
           
           <div className='invoiceFees'>
            
            <div className='DescriptionLable'>
            <label for='description' className='label11'>Description</label>
            <label for='bandFee' className='label12'>Band Fee</label>
            <label for='soundFee' className='label13'>Sound Fee</label>
            <label for='instrumentFee' className='label14'>Instrument Fee</label>
            <label for='transportFee' className='label15'>Transport Fee</label>
            <label for='others' className='label16'>Others</label>
            </div>
            
            <div className='AmountLabel'>
            <label for='amount' className='label17'>Amount (Rs.)</label>


            <form onSubmit={addInvoice}>

            <input type="number" min="0.00" max="100000000000000000.00" step="0.01" placeholder="0.00"
            defaultValue={'0.00'} decimalsLimit={2} className='currency-input11' value={bandFee} onChange={(e)=>{setBandFee(parseFloat(e.target.value));}
            }/>
            <input type="number" min="0.00" max="100000000000000000.00" step="0.01" placeholder="0.00"
            defaultValue={'0.00'} decimalsLimit={2} className='currency-input12' value={soundFee} onChange={(e)=>setSoundFee(parseFloat(e.target.value))}/>
            <input type="number" min="0.00" max="100000000000000000.00" step="0.01" placeholder="0.00"
            defaultValue={'0.00'} decimalsLimit={2} className='currency-input13' value={instrumentFee} onChange={(e)=>setInstrumentFee(parseFloat(e.target.value))}/>
            <input type="number" min="0.00" max="100000000000000000.00" step="0.01" placeholder="0.00"
            defaultValue={'0.00'} decimalsLimit={2} className='currency-input14' value={transportFee} onChange={(e)=>setTransportFee(parseFloat(e.target.value))}/>
            <input type="number" min="0.00" max="100000000000000000.00" step="0.01" placeholder="0.00"
            defaultValue={'0.00'} decimalsLimit={2} className='currency-input15' value={others} onChange={(e)=>setOthers(parseFloat(e.target.value))}/>
           
           <input type="checkbox" id="advanced1" name="advanced" onChange={handleCheckboxChange}/>
          <label for="advancedpayment" className='advancedpayment1'>Advanced is required.</label>
          <lable className="additionalnotes1">Bank Details : </lable><input type='text' id="advanced9" name="advanced" placeholder="BankName,AccNo,Branch" value={additionalNote} onChange={(e)=>setAdditionalNote(e.target.value)}></input>


            <button type='submit' className='submitInvoice1' >Submit</button>
            </form>
            </div>
            </div>
      <hr className='HrTag1'></hr>
      <label for='ttalAmount' className='totalAmount1'>Total Amount</label>
      <label for='displayTotalAmount' className='displayTotalAmount1'>{totalAmount}</label>

     
      
      <button className='previewInvoice1'>Preview</button>

          
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
        </SideMenuBarBand>
        
    </div>
  )
}


