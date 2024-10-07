import AreaChart from "./AreaChart";
import Filter from "./Filter";

export default function TransactionSuccessRate() {
  return (
    <div className="layout">
      <Filter title={"Transaction Success Rate"} />
      <AreaChart/>
    </div>
  );
}
