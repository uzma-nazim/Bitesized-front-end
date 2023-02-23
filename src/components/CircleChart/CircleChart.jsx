import React from "react";
import ReactApexChart from "react-apexcharts";
import "./CircleChart.scss";
class RadialApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [80, 70, 60],
      options: {
        chart: {
          height: 450,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: "28%",
            },

            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Course",
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 297;
                },
              },
            },
          },
        },
        labels: ["Apples", "Oranges", "Bananas", "Berries"],
        colors: ["#FF9054", "#3A63DE", "#FFCA61"],
      },
    };
  }

  render() {
    return (
      <>

      <div className="circleChartContainer">
        <h1 className="heading6">Course Complete</h1>

        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={300}
            width="100%"
          />
        </div>
        <div className="chartlabelcontainer">
          <div className="chartlabelBox">
            <div className="squareBox "></div>
            <h3 className="heading7">420</h3>
            <p className="p3 textgray">Ongoing</p>
          </div>
          <div className="rightLine"></div>
          <div className="chartlabelBox">
            <div className="squareBox bg-blue"></div>
            <h3 className="heading7">210</h3>
            <p className="p3 textgray">Hold</p>
          </div>
          <div className="rightLine"></div>
          <div className="chartlabelBox">
            <div className="squareBox bg-yellow"></div>
            <h3 className="heading7">200</h3>
            <p className="p3 textgray">Done</p>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default RadialApexChart;
