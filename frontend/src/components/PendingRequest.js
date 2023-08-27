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

    fetch("http://localhost:8080/requestMusicMember/monthlyGrowth/758463").then((res)=>res.json()).then((result)=>inc=result)
    console.log(inc)
    fetch("http://localhost:8080/requestMusicMember/noOfPendingRequest/758463").then((res)=>res.json()).then((result)=>setRequests({requests:result,increase:inc})) 
  },[])


  return (
    <div>
        
            <img className='pendingRequestImg' src={incomeImg} alt=''></img>
            <p className='pendingRequestP'>Pending Requests</p>
            <img className='wave01Img' src={wave01} alt=''></img>
            <p className='requestCount'>{(requests.requests>=10) ? requests.requests:"0"+requests.requests}</p>
            <p className={`${ 20>=0 ? "monthlyRequestPersontage":"monthlyRequestPersontageMinus"}`}>{ 20>=0 ?  "+"+20 :20}%</p>
            <p className='thisMonthRequest'>This Month</p>
            
    </div>
  )
}
