import React from "react";
import ReactApexChart from "react-apexcharts";

export default function BarChart   ()   {
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

 

