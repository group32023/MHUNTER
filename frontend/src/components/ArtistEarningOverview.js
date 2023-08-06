import React from 'react'
import Chart from "react-apexcharts";
import '../assets/css/artistEarningOverview.css'
import "apexcharts/dist/apexcharts.css";
import { useState } from 'react';

export default function ArtistEarningOverview() {
  const [state,setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
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
        colors: [ '#1BD067']
      },
      colors:['#1BD067'],
      grid: {
        stroke: {
          colors: ['#24292D'], // your color here
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
        strokeColors:'#1BD067',
        hover: {
         size: 8, 
        },
        shape: "circle", 
     },
      
    },
    series: [
      {
        name: "Income",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  }
  )

    
  return (
    <div>
          <p className='artistEarningOverviewHeader'>Earning Overview</p>
          <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="650"
              height="220"
            />
       
    </div>
  )
}
