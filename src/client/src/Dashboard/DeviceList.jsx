import React, { useState } from "react";
import { Switch, Table } from "antd";
const columns = [
  {
    title: "Model",
    width: 1,
    dataIndex: "model",
    key: "model",
    ellipsis: true,
  },
  {
    title: "IMEI",
    width: 1,
    dataIndex: "imei",
    key: "imei",
    ellipsis: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 1,
    ellipsis: true,
  },
  {
    title: "Online/Offline",
    dataIndex: "online_offline",
    key: "online_offline",
    width: 1,
    ellipsis: true,
  },
  {
    title: "Network Strength",
    dataIndex: "network_strength",
    key: "network_strength",
    width: 1,
    ellipsis: true,
  },
  {
    title: "Network Type",
    dataIndex: "network_type",
    key: "network_type",
    width: 1,
    ellipsis: true,
  },
  {
    title: "SIM Operator",
    dataIndex: "sim_operator",
    key: "sim_operator",
    width: 1,
    ellipsis: true,
  },
];

const dataSource = Array.from({
  length: 50,
}).map((_, i) => ({
  key: i,
  model: parseInt(Math.random() * 1000000),
  imei: parseInt(Math.random() * 100000000000000),
  status: ["Active", "In Active"][i % 2],
  online_offline: ["online", "offline"][i % 2],
  network_strength: ["75%", "85%", "95%"][i % 3],
  network_type: ["2G", "3G", "4G", "5G"][i % 4],
  sim_operator: ["Jio", "BSNL", "VI", "Airtel"][i % 4],
}));
const App = () => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        scroll={{
          x: 1500,
        }}
      />
    </>
  );
};
export default App;
