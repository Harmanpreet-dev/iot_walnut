import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const DeviceGraph = () => {
  const data = {
    labels: ["v1", "v2", "v3", "v4", "v5"],
    datasets: [
      {
        label: "App Version",
        data: [10, 4, 9, 10, 23],
        backgroundColor: "#4FBBBD",
      },
      {
        label: "Resource Version",
        data: [12, 5, 8, 20, 15],
        backgroundColor: "#F89436",
      },
      {
        label: "SDK Version",
        data: [18, 6, 7, 17, 20],
        backgroundColor: "#5A62AB",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
  };

  return <Bar data={data} options={options} />;
};

export default DeviceGraph;
