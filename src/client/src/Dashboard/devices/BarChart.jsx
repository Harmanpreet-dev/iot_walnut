import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = ({ data, axixs }) => {
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: axixs.x,
        },
      },
      y: {
        title: {
          display: true,
          text: axixs.y,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
