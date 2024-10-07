import React from "react";
import ReactApexChart from "react-apexcharts";

export default function AreaChart() {
  // Sample data structure for demonstration
  const series = {
    monthDataSeries1: {
      prices: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      dates: [
        '2023-01-01',
        '2023-02-01',
        '2023-03-01',
        '2023-04-01',
        '2023-05-01',
        '2023-06-01',
        '2023-07-01',
        '2023-08-01',
        '2023-09-01',
      ],
    },
  };

  const areaSeries = [{
    name: "STOCK ABC",
    data: series.monthDataSeries1.prices,
  }];

  const options = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Fundamental Analysis of Stocks',
      align: 'left',
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
      categories: series.monthDataSeries1.dates,
      labels: {
        rotate: -45, // Rotate labels for better visibility
        style: {
          colors: ['#000'],
          fontSize: '12px',
          cssClass: 'apexcharts-xaxis-label',
        },
      },
      position: 'bottom',
    },
    yaxis: {
      opposite: false, // Set this to false for left alignment
    },
    legend: {
      horizontalAlign: 'left',
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={areaSeries} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
