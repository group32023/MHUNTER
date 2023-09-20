import React, { useState } from 'react';
import incomeImg from '../../assets/images/telegram(3).png';
import wave01 from '../../assets/images/sound.png';
import '../../assets/css/pendingRequest.css';


export default function PendingComplaints({ expand }) {
  // Example hardcoded data
  const exampleMonthlyGrowth = 40;
  const examplePendingRequests = 10;

  const [requests, setRequests] = useState({
    requests: examplePendingRequests,
    increase: exampleMonthlyGrowth,
  });

  const [isExpanded, setExpanded] = useState(expand);

  return (
    <div>
      <p className='pendingRequestP'>Pending Complaints</p>
      <img className='wave01Img' src={wave01} alt='' />
      <p className='requestCount'>
        {(requests.requests >= 10 ? requests.requests : '0' + requests.requests)}
      </p>
      <p
        className={`${
          requests.increase >= 0
            ? 'monthlyRequestPersontage'
            : 'monthlyRequestPersontageMinus'
        }`}
      >
        {requests.increase >= 0 ? '+' + requests.increase : requests.increase}%
      </p>
      <p className='thisMonthRequest'>This Month</p>
    </div>
  );
}
