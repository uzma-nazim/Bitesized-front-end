import React from 'react'
// import "./DashboardChart.scss";
// import Chart from "react-apexcharts";

import ReactApexChart from "react-apexcharts";

// const DashboardChart = () => {
//     const series = [{
//         data: [{
//           x: '14',
//           y: 11,
//           fillColor: '#EB8C87',
//         }, {
//           x: '15',
//           y: 8
//         }, {
//           x: '16',
//           y: 13
//         }, {
//             x: '17',
//             y: 6
//           }, {
//             x: '18',
//             y: 14
//           }, {
//             x: '19',
//             y: 10
//           }, {
//             x: '20',
//             y: 16
//           }, {
//             x: '21',
//             y: 15
//           }, {
//             x: '22',
//             y: 14
//           }, {
//             x: '23',
//             y: 6
//           }, {
//             x: '24',
//             y: 10
//           }]
//       }]

//     const options = {
//         chart: {
//           // type: 'bar',
//           stacked: true,
//           stackType: "100%"
//         },
//         series: [{
//           data: [{
//             x: 'category A',
//             y: 10
//           }, {
//             x: 'category B',
//             y: 18
//           }, {
//             x: 'category C',
//             y: 13
//           }]
//         }]
//       }

//   return (
//     <div>
//          <Chart
//               options={options}
//               series={series}
//               // type="bar"
//               width="500"
//             />

//     </div>
//   )
// }

// export default DashboardChart

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Expense",
          data: [30, 20, 46, 10, 42, 38, 17, 23, 37, 9, 18],

        },
        {
          name: "Income",
          data: [38, 26, 30, 30, 38, 27, 75, 60, 40, 30, 45],
        
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "top",
                offsetX: -10,
                offsetY: 0,
              },
              stroke:{
                width:0,
              }
            },
          },
        ],
        plotOptions: {
          bar: {
            columnWidth:"30%",
            horizontal: false,
            borderRadius:2,
            barWidth:10,
            dataLabels: {
              show:true,
              total: {
                enabled: false,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                  // fillColor:"#4D4D4D","#000000",
                },
              },
            },
          },
        },
        colors:["#4D4D4D","#FFCA61"],
        xaxis: {
          type: "datetime",
          categories: [
            "01/01/2011 GMT",
            "01/02/2011 GMT",
            "01/03/2011 GMT",
            "01/04/2011 GMT",
            "01/05/2011 GMT",
            "01/06/2011 GMT",
            "01/07/2011 GMT",
            "01/08/2011 GMT",
            "01/09/2011 GMT",
            "01/10/2011 GMT",
            "01/11/2011 GMT",
          ],
        },
        legend: {
          position: "top",
          offsetY: 0,
          show: true
        },
        fill: {
          opacity: 1,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
          width={715}
        />
      </div>
    );
  }
}

export default ApexChart;