import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "../assets/css/artistEarningOverview.css";
import "apexcharts/dist/apexcharts.css";

export default function ArtistEarningOverview() {
  const [state, setState] = useState({
    options: {
      // ... (your options)
    },
    series: [
      {
        name: "Income",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });

  const mmId = localStorage.getItem("mmid");

  useEffect(() => {
    if (mmId) {
      fetch(`http://localhost:8080/artistIncome/monthlyOvercome/${mmId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((result) => updateSeriesData(result))
        .catch((error) => {
          console.error("Failed to fetch data:", error);
          // Handle the error, e.g., display an error message to the user
        });
    }
  }, [mmId]);

  // update the data array of series
  const updateSeriesData = (newData) => {
    setState((prevState) => ({
      ...prevState,
      series: [
        {
          ...prevState.series[0],
          data: newData,
        },
      ],
    }));
  };

  return (
    <div>
      <p className="artistEarningOverviewHeader">Earning Overview</p>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width="650"
        height="220"
      />
    </div>
  );
}
