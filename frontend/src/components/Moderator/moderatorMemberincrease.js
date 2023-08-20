import React from 'react';
import Chart from "react-apexcharts";
import '../../assets/css/artistEarningOverview.css';
import "apexcharts/dist/apexcharts.css";
import { useState } from 'react';

export default function ArtistEarningOverview() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
        labels: {
          style: {
            colors: 'white', 
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: 'white', 
          },
        },
      },
      fill: {
        colors: ['#1BD067']
      },
      colors: ['#1BD067'],
      grid: {
        stroke: {
          colors: ['#24292D'],
          opacity: 0.5
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 4,  
        colors: ['#FFF'], 
        strokeWidth: 3, 
        strokeColors: '#1BD067',
        hover: {
          size: 8, 
        },
        shape: "circle", 
      },
    },
    series: [
      {
        name: "Registered Users",
        data: [100, 150, 200, 180, 220, 250, 300, 280, 320]  // Replace with your registered user data
      }
    ]
  });

  return (
    <div>
   
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
