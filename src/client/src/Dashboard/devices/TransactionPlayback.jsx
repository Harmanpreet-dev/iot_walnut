import AreaChart from "./AreaChart";
import Filter from "./Filter";

export default function TransactionPlayback() {
  return (
    <div className="layout">
      <Filter title={"Transaction Playback"} />
          <AreaChart/>
    </div>
  );
}
