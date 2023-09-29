/* eslint-disable react/jsx-no-undef */
import React,{useState, useEffect,useRef,Lable} from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
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




export default function BandInvoice() {
  const { id,mid,oid } = useParams();
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
  const [eventid, setEventid]=useState(0)
  const [invoiceId,setInvoiceId] = useState(0);
  const [mmid, setMmid]=useState(0)
  const [orgId, setOrgId]=useState(0)
  const [agreementId, setAgreementId]=useState(0)



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
     

  }, []);





  useEffect(() => {
    // Set initial values when the component mounts

    setMmid(mid)
    setEventid(parseInt(id))
    setOrgId(parseInt(oid))
  }, []);

  // Event handler for checkbox change
  const handleCheckboxChange = () => {
    
    setpaymentType("Advanced");
    
  }

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
      setShowModal(true);
  };

  const handleCloseModal = () => {
    setBandFee(0.00);
    setArtistFee(0.00)
    setTransportFee(0.00)
    setOthers(0.00)
    setInstrumentFee(0.00)
    setTotalAmount(0.00)
    setSoundFee(0.00)
    setShowModal(false);
  };
  const handleCloseModalAndAccept = (e) => {
            setShowModal(false);

           
      

            

            console.log(eventid)
            const bookedList = {agreementId,invoiceId,eventid,mmid,orgId}
            console.log(bookedList)

                fetch("http://localhost:8080/requestsLog/save",{
                  method:"POST",
                  headers:{"Content-Type" : "application/json"},
                  body:JSON.stringify(bookedList)
                  
                }).then(()=>{

                  setBandFee(0.00);
                  setArtistFee(0.00)
                  setTransportFee(0.00)
                  setOthers(0.00)
                  setInstrumentFee(0.00)
                  setTotalAmount(0.00)
                  setSoundFee(0.00)
                  setShowModal(false);
 
                              
              })

              update();

            
    
};

  // var totalAmountofInvoice = bandFee+soundFee+instrumentFee+transportFee+others;
  
  // setTotalAmount(totalAmountofInvoice);

  const loadPendingRequest=()=>{
    navigate('/band/PendingRequests');
  }

  const update=()=>{



// Make a PUT request using fetch
fetch(`http://localhost:8080/requestMusicMember/update/${mid}/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json', // Specify the content type of the request
  },
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




    // fetch(`http://localhost:8080/requestMusicMember/update/${mid}/${id}`)
    // .then((response) => {
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    //   return response.json();
    // })
     
    //   .then((data) => {
    //     setUpdateRequest(data);
    //     console.log("hii updated")

    //   })
    //   .catch((error) => {
    //     console.log('Error fetching data :', error);
    //   });


      loadPendingRequest()

  }

  const addInvoice=(e)=>{
    e.preventDefault();
    const invoice = {bandFee,soundFee,instrumentFee,transportFee,others,totalAmount,paymentType,eventid,mmid}
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
       <SideMenuBarArtist>
        <div>
            <p className='headerDashboard'>Pending Requests</p>
            <div className={expand ? 'notificationBg':'notificationBg-ex'}>
              <img src={notification} className='notificationIcon' alt='notification'></img>
            </div>
            <div className={expand ? 'homeBg':'homeBg-ex'}>
            <Link to={'/'}>
                <img src={home} alt='homebtn' className='homeIcon'></img>
              </Link>
            </div>
            <div className={expand ? 'logoutBg':'logoutBg-ex'}>
              <img src={logout} alt='logout'className='logout'></img>
              <p className='logoutbtn'>Logout</p>
            </div>
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
            <p class="venue2"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest4"/> {event['place']}</p>
           
        
             </div>
        </div>

        <div className='InvoiceContainer'>
            <h1>Invoice</h1>
           
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
            <label for='amount' className='label17'>Amount(Rs.)</label>


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

            <button type='submit' className='submitInvoice1' >Submit</button>
            </form>
            </div>
            </div>
      <hr className='HrTag1'></hr>
      <label for='ttalAmount' className='totalAmount1'>Total Amount</label>
      <label for='displayTotalAmount' className='displayTotalAmount1'>{totalAmount}</label>

     
      
      <button className='previewInvoice1'onClick={()=>loadInvoicePreview(id,758463)}>Preview</button>

          
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
        </SideMenuBarArtist>
        
    </div>
  )
}


