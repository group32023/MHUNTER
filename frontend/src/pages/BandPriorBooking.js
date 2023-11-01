import React,{useState, useEffect,useRef} from 'react';
import {Button, Table} from 'react-bootstrap';
import { Link,useNavigate,useParams} from 'react-router-dom';
import SideMenuBarBand from '../components/common/SideMenuBar/SideMenuBarBand'
import '../assets/css/priorbooking.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useReactToPrint } from 'react-to-print'
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'
import empty from '../assets/images/empty(1).png'

import CircularProgress from '@mui/material/CircularProgress';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Topbar from '../components/common/Topbar';



export default function ArtistPriorBooking() {
  const [expand,setExpandedSideBar] = useState(true)
  const componentPDF = useRef();
  const { id1,id2,id3 } = useParams();
  const [org,setOrg]=useState();

  // console.log(id1);
  // console.log(id2);

  let navigate = useNavigate();

  const load=(id)=>{
    navigate(`/band/PendingRequestView/${id}`);

  }


  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the data from the Java backend
    fetch(`http://localhost:8080/requestMusicMember/priorBooking/${id1}/${id2}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
     
      .then((data) => {
        setEvents(data);
        fetch(`http://localhost:8080/organizer/viewSpecificOrganizer/${id2}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
     
      .then((data) => {
        setOrg(data);
        console.log();

      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
     

  }, []);

      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });


      


  
   
  
  console.log(events)
  const divCount = events.length;
  const divElements = [];

//   // Using a for loop to generate the <div> tags
  for (let i = 0; i < divCount; i++) {

    //var eventID=eventList[i]['eventid'];
    
    divElements.push(
      <tr>
      <td>{events[i]['eventName']}</td>
      <td>{events[i]['eventType']}</td>
      <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon1"/>{events[i]['place']}</td>
      <td>{events[i]['duration']}</td>
      <td>{events[i]['crowd']}</td>
      <td>{events[i]['income']}</td>
      <td>{events[i]['date']}</td>
    
</tr>
  );
   
  }

  


    return (
  

      <div>
          

          <SideMenuBarBand >
        <div>
            <p className='headerDashboard'>Pending Requests</p>
            <Topbar></Topbar>
          </div>

          <div className='addressDiv'>
          <h3>Prior Booking </h3>
          <div className='emptyMessageForPriorBooking'>
          {(divElements.length ===0 || divCount===0)?<><img src={empty} className='empty-img'></img><span className='emptyContent-report'>it's empty in here.</span></>:undefined}

          </div>
          <h4 className="organizer_tag">Organizer :  </h4>
          <h4 className="organizerName">{(org)? org.user['firstName']+" "+org.user['lastName']:undefined}</h4>
          </div>
        
              {/* <Button className="date"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Date</Button> 
              <Button className="event_type"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Event Type</Button> 
              <Button className="filter">Filter</Button>
               */}

            <div className='reportContainer' >
            

              <p>Income</p>
          
             <Table id="PriorBookingTable" className='table table-hover table-dark table-condensed table-resposive'  >
                        <thead>
                        <tr>
                          <th>Event Name</th>
                          <th>Event Type</th>
                          <th>Town</th>
                          <th>Duration</th>
                          <th>Crowd</th>
                          <th>Fee (Rs.)</th>
                          <th>Date</th>
                     
                          </tr>
                        </thead>

                        <tbody>
                         
                       
                         {divElements }
                          
                    
                          
                        </tbody>
                      </Table>
                  
          </div>     
          <Button className="back" onClick={()=>load(id3)}>Back</Button>
           
           </SideMenuBarBand>
          
          </div>
          
  
    )
}

