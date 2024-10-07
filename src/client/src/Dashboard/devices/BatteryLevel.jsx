import AreaChart from "./AreaChart";
import Filter from "./Filter";

export default function BatteryLevel() {
  return (
    <div className="layout">
      <Filter title={"BatteryLevel"} />
      <AreaChart/>
    </div>
  );
}


