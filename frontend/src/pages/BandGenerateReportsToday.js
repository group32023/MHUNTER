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
import empty from '../assets/images/empty(1).png'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


import SideMenuBarBand from '../components/common/SideMenuBar/SideMenuBarBand'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Topbar from '../components/common/Topbar';



export default function ArtistGenerateReports() {

  const [expand,setExpandedSideBar] = useState(true)

  const navigate = useNavigate();
  const componentPDF = useRef();
  const [eventList, setEventList] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [line,setLine] = useState([]);
  const [page,setPage] = useState(1);
  const noOfLinePerPage = 4;

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
    // fetch(`http://localhost:8080/artistIncome/specificArtistIncomeDetails/758463`)
    const mmId = localStorage.getItem('mmid');
    
    if (mmId) {
      fetch(`http://localhost:8080/artistIncome/specificArtistIncomeDetailsOntoday?eventType=${selectedOption}&fromDate=${fromDate}&todDate=${toDate}&mmid=${mmId}`)
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
    }
     
  }, [selectedOption, fromDate, toDate]);

   
   
  
  const divCount = eventList.length;
  const divElements = [];
 

 

  const todayIncome=(id)=>{
    navigate(`/artist/report/today/${id}`);

  }
 

  // Using a for loop to generate the <div> tags
  for (let i = 0; i < divCount; i++) {
    divElements.push(
      <tr>
      <td>{eventList[i]['eventName']}</td>
      <td>{eventList[i]['organizerName']}</td>
      <td>{eventList[i]['eventType']}</td>
      <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>{extractloc(eventList[i]["place"])}</td>
      <td>{eventList[i]['date']}</td>
      <td>{eventList[i]['income']}</td>
      
</tr>
  );
   
  }

   // set the current page
   const handleChange= (event,value)=>{
    setPage(value)
  }

// setup the pagination
  function setPagination(){
    let noOfLine =1
    let displayedData = []
    if(divElements.length>0){
      if(divElements.length < noOfLinePerPage*page){
        noOfLine = divElements.length
      }
      else{
        noOfLine =  noOfLinePerPage*page
      }
      for (let i = noOfLinePerPage*(page-1); i < noOfLine; i++) {
        displayedData.push(divElements[i]);
        
      }
      return displayedData
    }
    else{
      
      return displayedData 
    }
    
  }

  const extractloc = (location) => {

    const parts = location.split(',');
    const placeName = parts[0];
    const town = parts[parts.length - 2];
    const stringPart = town.replace(/\d+/g, '');
    return `${stringPart}`;
}


  

   const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"Income",
    onAfterPrint:()=>alert("Data saved in PDF")
   });

    return (
  
      <div >
            <SideMenuBarBand>
          
        <div>
            <p className='headerDashboard'>Reports</p>
            <Topbar></Topbar>
          </div>
             <lable className='col-sm-2 col-form-label' id="dateFrom"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>From Date:</lable> <input type='date' className='form-control' id="fromdate" name='fromdate' placeholder='dd-mm-yyyy'  value={fromDate} onChange={(e)=>handleDateChangeFromDate(e.target.value)}></input>
             
             <lable className='col-sm-2 col-form-label' id="Today"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>To Date :</lable><input type='date' className='form-control' id="todate" name='todate' placeholder='dd-mm-yyyy' value={toDate} min={fromDate} onChange={(e)=>handleDateChangeToDate(e.target.value)}></input>

        
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
          
             <Table id="ReportTable" className='table table-hover table-dark table-condensed table-resposive'  >
                        <thead>
                        <tr>
                          <th>Event Name</th>
                          <th>Organizer Name</th>
                          <th>Event Type</th>
                          <th>Town</th>
                          <th>Date</th>
                          <th>Income (Rs)</th>
                          </tr>
                        </thead>

                        <tbody>
                         
                       
                        {setPagination().map((item) => item)}
                          
                         
                          
                        </tbody>
                      </Table>
                  
          </div>     
          <Button className="download" onClick={generatePDF}>Download</Button>
           </div>


           {/* pagination */}
           
            {(divElements.length ==0)?<><img src={empty} className='empty-img'></img><span className='emptyContent-report'>it's empty in here.</span></>:undefined}

            <div className='artistEventPagination'>
              <Stack spacing={2}>
                <Pagination count={(Math.round(divElements.length/noOfLinePerPage))} color="secondary" page={page} onChange={handleChange} />
              </Stack>
            </div>
          
           </SideMenuBarBand>
                 
      </div>
    )
}

