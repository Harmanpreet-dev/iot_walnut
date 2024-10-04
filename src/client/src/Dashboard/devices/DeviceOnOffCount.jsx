import BarChart from "./BarChart";
import Filter from "./Filter";

export default function DeviceOnOffCount() {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "On",
        data: [2, 4, 6, 8, 10],
        backgroundColor: "#30BF89",
      },
      {
        label: "Off",
        data: [1, 4, 6, 12, 20],
        backgroundColor: "#FF2002",
      },
    ],
  };

  const axixs = {
    x: "Days",
    y: "On Off Count",
  };

  return (
    <div className="layout">
      <Filter title={"Device ON/OFF Count"} />
      <BarChart data={data} axixs={axixs} />
    </div>
  );
}
