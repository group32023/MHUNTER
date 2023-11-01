import React, { useEffect, useState } from 'react'

export default function PendingRequests() {
    const [pendingRequest,setPendingRequest] = useState([])
    const mmId = localStorage.getItem("mmid")

    useEffect(()=>{
        if(mmId){
            fetch(`http://localhost:8080/requestMusicMember/requestAndMonthlyGrowth/${mmId}`)
            .then((res)=>res.json())
            .then((result)=>{
                console.log(result);
                setPendingRequest(result);
            });
        }
    },[mmId])
  return (
    <div>
        pending..
    </div>
  )
}
