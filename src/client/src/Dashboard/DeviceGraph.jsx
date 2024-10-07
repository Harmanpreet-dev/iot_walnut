// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement);

// const DeviceGraph = () => {
//   const data = {
//     labels: ["v1", "v2", "v3", "v4", "v5"],
//     datasets: [
//       {
//         label: "App Version",
//         data: [10, 4, 9, 10, 23],
//         backgroundColor: "#4FBBBD",
//       },
//       {
//         label: "Resource Version",
//         data: [12, 5, 8, 20, 15],
//         backgroundColor: "#F89436",
//       },
//       {
//         label: "SDK Version",
//         data: [18, 6, 7, 17, 20],
//         backgroundColor: "#5A62AB",
//       },
//     ],
//   };

//   const options = {
//     indexAxis: "y",
//     responsive: true,
//   };

//   return <Bar data={data} options={options} />;
// };

// export default DeviceGraph;


import React from "react";
import ReactApexChart from "react-apexcharts";

export default function DeviceGraph   ()   {
  const series = [
    {
      name: "Series 1",
      data: [44, 55, 41, 64, 22, 43, 21],
    },
    {
      name: "Series 2",
      data: [53, 32, 33, 52, 13, 44, 32],
    },{
      name: "Series 3",
      data: [53, 42, 31, 52, 14, 45, 37],
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 430,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff'],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff'],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
  };

  return (
    <>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={430}  width={"100%"}/>
      </div>
      <div id="html-dist"></div>
    </>
  );
};

 

