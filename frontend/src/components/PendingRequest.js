import React, { useEffect, useState } from 'react'
import incomeImg from '../assets/images/telegram(3).png'
import wave01 from '../assets/images/sound.png'
import '../assets/css/pendingRequest.css'

export default function PendingRequest({expand}) {
  const [requests,setRequests] = useState({
    requests:"",
    increase:0
  })

  const [isExpanded,setExpanded] = useState(expand)
  

  useEffect(()=>{
    var noRequest = "05"
    // this is formula for monthly growth =(((Latest Month/ First Month)^(1/# of Months)) -1)*100
    var lastMonthRequest = 5
    var firstMonthRequest =4
    var monthsDiff = 1

    var increase = (((lastMonthRequest/firstMonthRequest)**(1/monthsDiff))-1)*100 
    increase = Math.round(increase)
    setRequests({requests:noRequest,increase:increase})

    
  },[])

  console.log(isExpanded)

  return (
    <div>
        
            <img className='pendingRequestImg' src={incomeImg} alt=''></img>
            <p className='pendingRequestP'>Pending Requests</p>
            <img className='wave01Img' src={wave01} alt=''></img>
            <p className='requestCount'>{requests.requests}</p>
            <p className='monthlyRequestPersontage'>+{requests.increase}%</p>
            <p className='thisMonthRequest'>This Month</p>
            
    </div>
  )
}
