import AreaChart from "./AreaChart";
import Filter from "./Filter";

export default function Temperature() {
  return (
    <div className="layout">
      <Filter title={"Temperature"} />
      <AreaChart />
    </div>
  );
}
