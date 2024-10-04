import BarChart from "./BarChart";
import Filter from "./Filter";

export default function USBPlugged() {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "Plug-in",
        data: [2, 4, 6, 8, 10],
        backgroundColor: "#1E87F0",
      },
      {
        label: "Plug-out",
        data: [1, 4, 6, 12, 20],
        backgroundColor: "#797979",
      },
    ],
  };
  const axixs = {
    x: "Days",
    y: "USB Plugged",
  };
  return (
    <div className="layout">
      <Filter title={"USB Plugged"} />
      <BarChart data={data} axixs={axixs} />
    </div>
  );
}
