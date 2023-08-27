/* eslint-disable react/jsx-no-undef */
import React,{useState, useEffect,useRef,Lable} from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/bandInvoice.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';
import CurrencyInput from 'react-currency-input-field';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
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
    const invoice = {bandFee,soundFee,instrumentFee,transportFee,others,totalAmount,paymentType}
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
        var totalAmountofInvoice = bandFee + soundFee + instrumentFee + transportFee + others;
        //console.log(typeof(bandFee))
        setTotalAmount(totalAmountofInvoice);
      }, [bandFee, soundFee, instrumentFee, transportFee, others]);



      
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
        

     
      
      <button className='backInvoice'>Back</button>

    
        
        
    </div>
  )
}

