import React, { useState, useEffect } from 'react';
import incomeImg from '../../assets/images/dollar.png';
import wave02 from '../../assets/images/sound(1).png';
import '../../assets/css/artistIncome.css';

export default function ArtistIncome() {
  const exampleIncome = [1500, 12]; // Example income and monthly growth

  const [income, setIncome] = useState(exampleIncome);

  useEffect(() => {
    // No actual API fetches, just hardcoded values

    // Simulate a delay before updating state
    const timer = setTimeout(() => {
      setIncome(exampleIncome);
    }, 1000); // Delay of 1 second (1000 milliseconds)

    // Clear the timer on cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <img className='incomeImg' src={incomeImg} alt='' />
      <p className='incomeP'>Income</p>
      <img className='wave02Img' src={wave02} alt='' />
      <p className='incomeCount'>{income[0]}</p>
      <p
        className={`${
          income[1] >= 0
            ? 'monthlyRequestPersontage'
            : 'monthlyRequestPersontageMinus'
        }`}
      >
        {income[1] >= 0 ? '+' + income[1] : income[1]}%
      </p>
      <p className='thisMonthRequest'>This Month</p>
    </div>
  );
}
