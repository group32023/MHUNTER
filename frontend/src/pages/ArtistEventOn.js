import React,{useState, useEffect,useRef} from 'react';
import {Button, Table} from 'react-bootstrap';
import { useNavigate,useParams} from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/priorbooking.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useReactToPrint } from 'react-to-print'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistEventOn() {


  const { mmid, date } = useParams();
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

  

  if(eventList.length===0) return <div>Loading....................</div>

    return (
  
      <div className='artistContainer'>
          <div className='artistSideBar'>
              <SideMenuBarArtist></SideMenuBarArtist>
              <h3 className='headerDashboard'>Pending Requests</h3>
              <div className='notificationBg'></div>
              <div className='homeBg'></div>
              <div className='logoutBg'></div>
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
          <Button className="download">Back</Button>
           </div>
          
          
          
      </div>
    )
}

