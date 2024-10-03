import { Col, Flex, Row } from "antd";
import airtel from "./icons/airtel.svg";
import bsnl from "./icons/bsnl.svg";
import jio from "./icons/jio.svg";
import vi from "./icons/airtel.svg";

export default function DevicesByOperators() {
  const deviceOperators = [
    { name: "Airtel", devices: 19792, icon: airtel },
    { name: "BSNL", devices: 19792, icon: bsnl },
    { name: "Jio", devices: 19792, icon: jio },
    { name: "VI", devices: 2899, icon: vi },
  ];
  return (
    <>
      <div className="contents-heading my-2">Devices By Operators</div>
      <Flex gap={8} vertical>
        {deviceOperators.map(({ name, devices, icon }) => (
          <div key={name} className="flex items-center rectangle-11 ">
            <div className="flex items-center px-4 gap-4">
              <div className="group-44760">
                <img src={icon} />
              </div>
              <div className="flex flex-col">
                <div className="group-44744">{name}</div>
                <div className="group-44745 ">
                  Devices: <span className="group-44746">{devices}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Flex>
    </>
  );
}
