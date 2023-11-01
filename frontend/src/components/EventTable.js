import React, { useState,useEffect } from 'react'
import eventimage from '../assets/images/slide_8.jpg';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList} from '@fortawesome/free-solid-svg-icons'

import '../assets/css/eventTable.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function () {

  const [event,setEvent] = useState([])
  const BASE_URL = "http://localhost:8080";
  const [page,setPage] = useState(1)
  const noOfLinePerPage = 4

  const handle = () =>{
    fetch(`http://localhost:8080/event/getAll`).then((res)=>res.json()).then((data)=>{
        const newItem = data.map(item =>
      (
            <tr>
                  <td>{item.date}</td>
                  <td><img src={`${BASE_URL}/postData/uploads/image/${item.image}`} id="eventImage"></img></td>
                  <td>{item.event_name}</td>
                  <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                  <td>{item.start_time}</td>
            </tr>
      ))
                    
      setEvent(newItem)
            
}) .catch(error =>{
      console.log('There was a problem with the fetch operation:', error.message)
  })

}

 
useEffect(()=>{
    handle();
  },[])

    // set the current page
  const handleChange= (event,value)=>{
    setPage(value)
  }

// setup the pagination
  function setPagination(){
    let noOfLine =1
    let displayedData = [];
    if(event.length < noOfLinePerPage*page){
      noOfLine = event.length
    }
    else{
      noOfLine =  noOfLinePerPage*page
    }
    for (let i = noOfLinePerPage*(page-1); i < noOfLine; i++) {
      displayedData.push(event[i]);
      
    }
    return displayedData
  }
    
  
  if(event===null) return <div>Loading....................</div>

  return (
    <div>
       
        <div>
             
                <div className='eventTablecontainer'>

                    <lable className="eventList">EVENTS LIST</lable>
                      <Table className='table table-hover table-dark' id="tableEvent" >
                        <tbody>
                          <div>{setPagination().map((item) => item)}</div>
                        </tbody>
                      </Table>
                      <div className='artistEventTablePagination'>
                        <Stack spacing={2}>
                          <Pagination count={(Math.round(event.length/noOfLinePerPage))} color="secondary" page={page} onChange={handleChange} />
                        </Stack>
                      </div>
                  

                </div>

            </div>
            

      </div>
    
  )
}
