import React,{useState, useEffect,useRef} from 'react';
import {Button, Table} from 'react-bootstrap';
import { Link,useNavigate,useParams} from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/priorbooking.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useReactToPrint } from 'react-to-print'
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'

import CircularProgress from '@mui/material/CircularProgress';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistPriorBooking() {
  const [expand,setExpandedSideBar] = useState(true)
  const componentPDF = useRef();
  const { id1,id2,id3 } = useParams();

  // console.log(id1);
  // console.log(id2);

  let navigate = useNavigate();

  const load=(id)=>{
    navigate(`/artist/PendingRequestView/${id}`);

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

      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
     

  }, []);


  
   
  
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

  
  if(events.length===0) return <div><CircularProgress color="secondary" /></div>


    return (
  
      <div>
          

          <SideMenuBarArtist >
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

          <div className='addressDiv'>
          <h3>Prior Booking </h3>
      
          <h4 className="organizer_tag">Organizer :  </h4>
          <h4 className="organizerName">{events[0]['organizerName']}</h4>
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
           
           </SideMenuBarArtist>
          
          </div>
          
  
    )
}

