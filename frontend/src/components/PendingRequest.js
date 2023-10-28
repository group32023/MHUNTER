import React, { useEffect, useState } from 'react'
import incomeImg from '../assets/images/telegram(3).png'
import wave01 from '../assets/images/sound.png'
import '../assets/css/pendingRequest.css'

export default function PendingRequest({expand}) {
  var inc;
  const [requests,setRequests] = useState({
    requests:"",
    increase:0
  })

  const [isExpanded,setExpanded] = useState(expand)
  

  useEffect(()=>{
    const mmId = localStorage.getItem('mmid');
    if(mmId){
      fetch(`http://localhost:8080/requestMusicMember/monthlyGrowth/${mmId}`).then((res)=>res.json()).then((result)=>inc=result)
    console.log(inc)
    fetch(`http://localhost:8080/requestMusicMember/noOfPendingRequest/${mmId}`).then((res)=>res.json()).then((result)=>setRequests({requests:result,increase:inc})) 
    }
    
  },[])


  return (
    <div>
        
            <img className='pendingRequestImg' src={incomeImg} alt=''></img>
            <p className='pendingRequestP'>Pending Requests</p>
            <img className='wave01Img' src={wave01} alt=''></img>
            <p className='requestCount'>{(requests.requests>=10) ? requests.requests:"0"+requests.requests}</p>
            <p className={`${ requests.increase>=0 ? "monthlyRequestPersontage":"monthlyRequestPersontageMinus"}`}>{ requests.increase>=0 ?  "+"+requests.increase :requests.increase}%</p>
            <p className='thisMonthRequest'>This Month</p>
            
    </div>
  )
}
