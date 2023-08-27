import React, { useEffect, useState } from 'react'
import incomeImg from '../assets/images/dollar.png'
import wave02 from '../assets/images/sound(1).png'
import '../assets/css/artistIncome.css'

export default function ArtistIncome() {
  const [income,setIncome] = useState([])

  useEffect(()=>{

    fetch("http://localhost:8080/artistIncome/incomeAndMonthlyGrowth/758463").then(res=>res.json()).then((result)=>setIncome(result))
    
  },[])

  

  return (
    <div>
            <img className='incomeImg' src={incomeImg} alt=''></img>
            <p className='incomeP'>Income</p>
            <img className='wave02Img' src={wave02} alt=''></img>
            <p className='incomeCount'>{income[0]}</p>
            <p className={`${10>=0 ? "monthlyRequestPersontage":"monthlyRequestPersontageMinus"}`}>{ 10>=0 ?  "+"+10 :10}%</p>
            <p className='thisMonthRequest'>This Month</p>
    </div>
  )
}
