import React,{useState, useEffect,useRef} from 'react';
import {Button, Table} from 'react-bootstrap';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/priorbooking.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useReactToPrint } from 'react-to-print'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistGenerateReports() {

  const componentPDF = useRef();
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    // Fetch the data from the Java backend
    fetch('http://localhost:8080/artistIncome/specificArtistIncomeDetails/3001')
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
      <td>{eventList[i]['event_name']}</td>
      <td>W.R.A.Kavindra Jayasignhe</td>
      <td>{eventList[i]['event_type']}</td>
      <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>{eventList[i]['town']}</td>
      <td>{eventList[i]['date']}</td>
      <td>17000.00</td>
</tr>
  );
   
  }

  

   const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"Income",
    onAfterPrint:()=>alert("Data saved in PDF")
   });

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
          <h3>Prior Booking </h3>
          <h4 className="organizer_tag">Organizer :  </h4>
          <h4 className="organizerName">W.R.A.Tharindu Wijesinghe</h4>
          </div>
        
              <MDBBtn className="date"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Date</MDBBtn> 
              <MDBBtn className="event_type"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Event Type</MDBBtn> 
              <MDBBtn className="filter">Filter</MDBBtn>
              

            <div className='reportContainer' >
            <div ref={componentPDF}>

              <p>Income</p>
          
             <Table id="PriorBookingTable" className='table table-hover table-dark table-condensed table-resposive'  >
                        <thead>
                        <tr>
                          <th>Event Name</th>
                          <th>Organizer Name</th>
                          <th>Event Type</th>
                          <th>Town</th>
                          <th>Date</th>
                          <th>Income</th>
                          </tr>
                        </thead>

                        <tbody>
                         
                       
                         {divElements}
                          
                         
                          
                        </tbody>
                      </Table>
                  
          </div>     
          <Button className="download" onClick={generatePDF}>Download</Button>
           </div>
          
          
          
      </div>
    )
}

