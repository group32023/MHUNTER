import React, { useEffect, useState } from "react";
import incomeImg from "../../assets/images/telegram(3).png";
import wave01 from "../../assets/images/sound.png";
import "../../assets/css/pendingRequest.css";

export default function PendingRequests() {
  const [requests, setRequests] = useState([]);

  const mmId = localStorage.getItem("mmid");

  useEffect(() => {
    if (mmId) {
      fetch(
        `http://localhost:8080/requestMusicMember/requestAndMonthlyGrowth/${mmId}`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setRequests(result);
        });
    }
  }, [mmId]); // Include mmId as a dependency to trigger the effect when mmId changes

  return (
    <div>
      <img className="pendingRequestImg" src={incomeImg} alt="" />
      <p className="pendingRequestP">Pending Requests</p>
      <img className="wave01Img" src={wave01} alt="" />
      <p className="requestCount">{requests[0]}</p> {/* Display the first value */}
      <p
        className={`${
          requests[1] >= 0
            ? "monthlyRequestPersontage"
            : "monthlyRequestPersontageMinus"
        }`}
      >
        {requests[1] >= 0 ? "+" + requests[1] : requests[1]}%
      </p>
      <p className="thisMonthRequest">This Month</p>
    </div>
  );
}
