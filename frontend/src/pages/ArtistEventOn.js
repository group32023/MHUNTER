import React,{useState, useEffect,useRef} from 'react';
import {Button, Table} from 'react-bootstrap';
import { useNavigate,useParams} from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/priorbooking.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useReactToPrint } from 'react-to-print'
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistEventOn() {

  const [expand,setExpandedSideBar] = useState(true)
  const { mmid, date, eventId } = useParams();
  const componentPDF = useRef();
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    // Fetch the data from the Java backend
    fetch(`http://localhost:8080/requestMusicMember/eventsOn/${mmid}/${date}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
     
      .then((data) => {
        setEventList(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
      console.log(eventList);

  }, []);


  let navigate = useNavigate();


   
  
  const divCount = eventList.length;
  const divElements = [];
 

  // Using a for loop to generate the <div> tags
  for (let i = 0; i < divCount; i++) {

    //var eventID=eventList[i]['eventid'];
    
    divElements.push(
      <tr>
      <td>{eventList[i]['eventName']}</td>
      <td>{eventList[i]['organizerName']}</td>
      <td>{eventList[i]['eventType']}</td>
      <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>{eventList[i]['place']}</td>
      <td>{eventList[i]['crowd']}</td>
      <td>{eventList[i]['income']}</td>
      
</tr>
  );
   
  }

  const load=(id)=>{
    navigate(`/artist/PendingRequestView/${id}`);

  }

  if(eventList.length===0) return <div>Loading....................</div>

    return (
  
      <div >
      
         <SideMenuBarArtist>
        <div>
            <p className='headerDashboard'>Pending Requests</p>
            <div className={expand ? 'notificationBg':'notificationBg-ex'}>
              <img src={notification} className='notificationIcon' alt='notification'></img>
            </div>
            <div className={expand ? 'homeBg':'homeBg-ex'}>
              <img src={home} alt='homebtn' className='homeIcon'></img>
            </div>
            <div className={expand ? 'logoutBg':'logoutBg-ex'}>
              <img src={logout} alt='logout'className='logout'></img>
              <p className='logoutbtn'>Logout</p>
            </div>
          </div>

          <div className='addressDiv'>
          <h3>Envents On : {date} </h3>
          
          </div>
        
              

            <div className='reportContainer' >
            <div >

              <p>Income</p>
          
             <Table id="PriorBookingTable1" className='table table-hover table-dark table-condensed table-resposive'  >
                        <thead>
                        <tr>
                          <th>Event Name</th>
                          <th>Organizer Name</th>
                          <th>Event Type</th>
                          <th>Town</th>
                          <th>Crowd</th>
                          <th>Fee (Rs.)</th>
                        
                          </tr>
                        </thead>

                        <tbody>
                         
                       
                         {divElements}
                          
                         
                          
                        </tbody>
                      </Table>
                  
          </div>     
          <Button className="back" onClick={()=>load(eventId)}>Back</Button>
           </div>
          
       
           </SideMenuBarArtist>
      </div>
    )
}

