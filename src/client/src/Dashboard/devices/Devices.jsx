import Alerts from "./Alerts";
import BatteryLevel from "./BatteryLevel";
import CPUUsage from "./CPUUsage";
import DeviceOnOffCount from "./DeviceOnOffCount";
import NetworkPerformance from "./NetworkPerformance";
import NetworkType from "./NetworkType";
import Temperature from "./Temperature";
import Tickets from "./Tickets";
import TransactionPlayback from "./TransactionPlayback";
import TransactionSuccessRate from "./TransactionSuccessRate";
import USBPlugged from "./USBPlugged";
import VolumeLevel from "./VolumeLevel";
import "./devices.css";

export default function Devices() {
  return (
    <>
      <Alerts />
      <BatteryLevel />
      <CPUUsage />
      <DeviceOnOffCount />
      <NetworkPerformance />
      <NetworkType />
      <Temperature />
      <Tickets />
      <TransactionPlayback />
      <TransactionSuccessRate />
      <USBPlugged />
      <VolumeLevel />
    </>
  );
}
