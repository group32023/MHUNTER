import React, { useEffect, useState } from "react";
import incomeImg from "../assets/images/dollar.png";
import wave02 from "../assets/images/sound(1).png";
import "../assets/css/artistIncome.css";

export default function ArtistIncome() {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    const mmId = localStorage.getItem("mmid");
    if (mmId) {
      fetch(`http://localhost:8080/artistIncome/incomeAndMonthlyGrowth/${mmId}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setIncome(result);
        });
    }
  }, []);

  return (
    <div>
      <img className="incomeImg" src={incomeImg} alt=""></img>
      <p className="incomeP">Income</p>
      <img className="wave02Img" src={wave02} alt=""></img>
      <p className="incomeCount">{income[0]}</p>
      <p
        className={`${
          income[1] >= 0
            ? "monthlyRequestPersontage"
            : "monthlyRequestPersontageMinus"
        }`}
      >
        {income[1] >= 0 ? "+" + income[1] : income[1]}%
      </p>
      <p className="thisMonthRequest">This Month</p>
    </div>
  );
}
