import React from 'react'
import "./DashboardChart.scss";
import Chart from "react-apexcharts";

const DashboardChart = () => {
    const series = [{
        data: [{
          x: '14',
          y: 11,
          fillColor: '#EB8C87',
        }, {
          x: '15',
          y: 8
        }, {
          x: '16',
          y: 13
        }, {
            x: '17',
            y: 6
          }, {
            x: '18',
            y: 14
          }, {
            x: '19',
            y: 10
          }, {
            x: '20',
            y: 16
          }, {
            x: '21',
            y: 15
          }, {
            x: '22',
            y: 14
          }, {
            x: '23',
            y: 6
          }, {
            x: '24',
            y: 10
          }]
      }]

    const options = {
        chart: {
          type: 'bar',
          stacked: true,
          stackType: "100%"
        },
        series: [{
          data: [{
            x: 'category A',
            y: 10
          }, {
            x: 'category B',
            y: 18
          }, {
            x: 'category C',
            y: 13
          }]
        }]
      }

  return (
    <div>
         <Chart
              options={options}
              series={series}
              type="bar"
              width="500"
            />
            
    </div>
  )
}

export default DashboardChart