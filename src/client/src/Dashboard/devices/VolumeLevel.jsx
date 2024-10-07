import AreaChart from "./AreaChart";
import Filter from "./Filter";

export default function VolumeLevel() {
  return (
    <div className="layout">
      <Filter title={"Volume Level"} />
      <AreaChart/>
    </div>
  );
}
