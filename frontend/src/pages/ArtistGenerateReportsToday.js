import React,{useState, useEffect,useRef} from 'react';
import {Button, Table} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link,useParams, useNavigate } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistReport.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useReactToPrint } from 'react-to-print'
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistGenerateReports() {

  const [expand,setExpandedSideBar] = useState(true)

  const navigate = useNavigate();
  const componentPDF = useRef();
  const [eventList, setEventList] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (value) => {
  
    setSelectedOption(value);
  
  };


  const handleDateChangeFromDate = (value) => {


    setFromDate(value);
   
  };

  const handleDateChangeToDate = (value) => {
 

    setToDate(value);
  
  };

  useEffect(() => {
    // Fetch the data from the Java backend
    const fromDateObject = new Date(fromDate);
    const toDateObject = new Date(toDate);
    // fetch(`http://localhost:8080/artistIncome/specificArtistIncomeDetailsOntoday/${selectedOption}/${fromDateObject.getDate}/${toDateObject.getDate}/101`)
    fetch(`http://localhost:8080/artistIncome/specificArtistIncomeDetails/758463`)

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
     
  }, [selectedOption, fromDate, toDate]);

   
   
  
  const divCount = eventList.length;
  const divElements = [];
 
 

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
      
</tr>
  );
   
  }

  

   const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"Income",
    onAfterPrint:()=>alert("Data saved in PDF")
   });

    return (
  
      <div >
       <SideMenuBarArtist>
      
          
        <div>
            <p className='headerDashboard'>Reports</p>
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
             <lable className='col-sm-2 col-form-label' id="dateFrom">From Date:</lable> <input type='date' className='form-control' id="fromdate" name='fromdate' placeholder='dd-mm-yyyy'  value={fromDate} onChange={(e)=>handleDateChangeFromDate(e.target.value)}></input>
             
             <lable className='col-sm-2 col-form-label' id="Today"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>To Date :</lable><input type='date' className='form-control' id="todate" name='todate' placeholder='dd-mm-yyyy' value={toDate} onChange={(e)=>handleDateChangeToDate(e.target.value)}></input>

        
              {/* <Button className="dateFrom"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Date From</Button> 
              <Button className="Today" onClick={()=>todayIncome(101)}><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Today</Button> 
              <Button className="eventTypeSelection"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Event Type</Button> */}

              <Form.Select aria-label="Default select example" id='selector' value={selectedOption} onChange={(e)=>handleSelectChange(e.target.value)}>
                    <option >Event Type</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Party">Party</option>
                    <option value="Musical Show">Musical Show</option>
                  </Form.Select>


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
          
           </SideMenuBarArtist> 
           
      </div>
    )
}

