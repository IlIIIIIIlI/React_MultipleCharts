import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./App.css";

function App() {
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
        title: {
          text: "Basic Bar",
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: undefined,
            color: '#263238'
          },
        }
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "People Born",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "People Died",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });

  const [state2, setState2] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
        title: {
          text: "Basic Bar",
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: undefined,
            color: '#263238'
          },
        }
      },
      xaxis: {
        categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
      },
    },
    series: [
      {
        name: "peace",
        data: [1, 2, 3, 4, 5, 6, 7],
      },
      {
        name: "love",
        data: [5, 6, 7, 8, 9, 10],
      },
    ],
  });




  return (
    <div className="App">
      <h1>
        React Charts Demo <i class="fas fa-user"></i>{" "}
      </h1>
      <div className="row" align="center">
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="450"

          />
        </div>
        <h1>
          React Charts Demo <i class="fas fa-user"></i>{" "}
        </h1>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state2.options}
            series={state2.series}
            type="area"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state2.options}ss
            series={state2.series}
            type="radar"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="histogram"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="scatter"
            width="450"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="heatmap"
            width="450"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// bar
// line
// area
// radar
// histogram
// scatter
// heatmap
