import React, { useEffect, useState } from 'react'
import incomeImg from '../assets/images/dollar.png'
import wave02 from '../assets/images/sound(1).png'
import '../assets/css/artistIncome.css'

export default function ArtistIncome() {
  const [income,setIncome] = useState([])

  useEffect(()=>{

    fetch("http://localhost:8080/artistIncome/incomeAndMonthlyGrowth/3001").then(res=>res.json()).then((result)=>setIncome(result))
    console.log(income[0])
    // this is formula for monthly growth =(((Latest Month/ First Month)^(1/# of Months)) -1)*100
    var lastMonthIncome = 1200000
    var firstMonthIncome =1100000
    var monthsDiff = 1
    var newIncome = "1,200,000"
    
    var increase = (((lastMonthIncome/firstMonthIncome)**(1/monthsDiff))-1)*100 
    increase = Math.round(increase)
    setIncome({income:newIncome,increase:increase})
  },[])

  

  return (
    <div>
        <div className='artistIncomeDiv'>
            <img className='incomeImg' src={incomeImg} alt=''></img>
            <p className='incomeP'>Income</p>
            <img className='wave02Img' src={wave02} alt=''></img>
            <p className='incomeCount'>{income[0]}</p>
            <p className={`${income[1]>=0 ? "monthlyRequestPersontage":"monthlyRequestPersontageMinus"}`}>{ income[1]>=0 ?  "+"+income[1] :income[1]}%</p>
            <p className='thisMonthRequest'>This Month</p>
        </div>
    </div>
  )
}
