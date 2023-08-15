/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useEffect,useRef} from 'react';
import { Link,useParams } from 'react-router-dom';



export default function h() {

  const { id } = useParams();

  const [eventState, setEventState] = useState([]);

  useEffect(() => {
    // Fetch the data from the Java backend
    fetch(`http://localhost:8080/pendingRequest/confirmRequest/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
     
      .then((data) => {
        setEventState(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
      
      console.log(eventState);

  }, []);
    
  return(
    <div>{eventState}</div>
  );
  
}