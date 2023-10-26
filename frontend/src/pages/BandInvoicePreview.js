/* eslint-disable react/jsx-no-undef */
import React,{useState, useEffect,useRef} from 'react';
import { useNavigate,useLocation,useParams} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
//import '../assets/css/artistDashboard.css'
import '../assets/css/bandAgreementPreview.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';
import eventType from '../assets/images/eventtype.png'
import Pagination from '../components/common/Pagination';
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'
import logo from '../assets/images/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function BandAgreementPreview(props) {

 
  

  const location =useLocation();
  console.log(location);
  
  
  

  const { id, mmid } = useParams();
  const [event, setEvent] = useState([]);
  const [member,setMember] = useState(true)


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
      console.log(event);


      fetch(`http://localhost:8080/requestMusicMember/musicMemberDetails/${mmid}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok1');
        }
        return response.json();
      })
       
        .then((data) => {
          setMember(data);
        })
        .catch((error) => {
          console.log('Error fetching data :', error);
        });
        console.log(member);

  }, []);

  
 

  return (

   
    
    <div >
    <div className='previewContainerBody'>
    <button className='previousGo'>{'<'}</button>
        <div className='previewContainer'>
        <img src={logo} alt='logo' className='logo'></img>
              <p className='bandName'>{member['userName']}</p>
              <p className='bandAddress'>{member['address']}</p>
              <p className='bandEmail'>{member['email']}</p>
              <hr className='agreementHr'></hr>
              <h3>Invoice</h3>
              <div className='agreementContent'>
            <p className='organizerNamelabel'>Name : </p><p className='organizerName'>{event['organizerName']}</p>
              <p className='eventNamelabel'>Event : </p><p className='eventName'>{event['eventName']}</p>
              <p className='eventDatelabel'>Date : </p><p className='eventDate'> {event['date']}</p>
              <p className='placelabel'>Venue :</p><p className='place'> {event['town']}</p>
              <p className='timelabel'>Time : </p><p className='time'>{event['startTime']}</p>

              <div className='invoiceDetailContainer'>
              <div className='descriptionColumn'>
              <label className='dColumn'>Description</label>
              <label className='AFee'>Band Fee</label>
              <label className='tFee'>Sound Fee</label>
              <label className='tFee'>Instrument Fee</label>
              <label className='tFee'>Transport Fee</label>
              <label className='oFee'>Others</label>
              <label className='totalFee'>Total Amount</label>

              </div>
              <div className='amountColumn'>
              <label className='aColumn'>Amonut (Rs.)</label>
              <label className='AFeeAmpunt'>{location.state.bandfee}</label>
              <label className='SFeeAmpunt'>{location.state.soundfee}</label>
              <label className='IFeeAmpunt'>{location.state.instrumentfee}</label>
              <label className='tFeeAmpunt'>{location.state.transportfee}</label>
              <label className='oFeeAmpunt'>{location.state.other}</label>
              <label className='totalFeeAmpunt'>{location.state.totalAmount}</label>

    </div>
           
              </div>
              

              </div>
           
        </div>

    </div>
    
    
    
    </div>
  )
}

