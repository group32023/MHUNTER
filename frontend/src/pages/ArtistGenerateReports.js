import React,{useState, useEffect,useRef} from 'react';
import {Button, Table} from 'react-bootstrap';
import { Link,useParams, useNavigate } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistReport.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useReactToPrint } from 'react-to-print'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistGenerateReports() {


  const navigate = useNavigate();
  const componentPDF = useRef();
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    // Fetch the data from the Java backend
    const mmId = localStorage.getItem('mmid');
    if(mmId){
    fetch(`http://localhost:8080/artistIncome/specificArtistIncomeDetails/${mmId}`)
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
    }

  }, []);


   
   
  
  const divCount = eventList.length;
  const divElements = [];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
 

  const todayIncome=(id)=>{
    navigate(`/artist/report/today/${id}`);

  }
 

  // Using a for loop to generate the <div> tags
  for (let i = 0; i < divCount; i++) {

    //var eventID=eventList[i]['eventid'];
    
    divElements.push(
      <tr>
      <td>{eventList[i]['eventName']}</td>
      <td>{eventList[i]['organizerName']}</td>
      <td>{eventList[i]['eventType']}</td>
      <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>{eventList[i]['place']}</td>
      <td>{eventList[i]['date']}</td>
      <td>{eventList[i]['income']}</td>
      <td>{}</td>
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
              <h3 className='headerDashboard'>Reports</h3>
              <div className='notificationBg'></div>
              <div className='homeBg'></div>
              <div className='logoutBg'></div>
          </div>
        
              <Button className="dateFrom"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Date From</Button> 
              <Button className="Today"  onClick={()=>todayIncome(101)}><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Today</Button> 
              <Button className="eventTypeSelection"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Event Type</Button>
              

            <div className='reportContainer' >
            <div ref={componentPDF}>

              <p>Income</p>
          
             <Table id="ReportTable" className='table table-hover table-dark table-condensed table-resposive'  >
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

