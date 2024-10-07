import { Flex, Typography } from "antd";

import { Card, Col, Row } from "antd";
import volume from "../icons/volume.svg";
import network from "../icons/network.svg";
import networktype from "../icons/networktype.svg";
import transaction from "../icons/transaction.svg";
import transactionSuccess from "../icons/transactionSuccess.svg";
import sdk from "../icons/sdk.svg";
import app from "../icons/app.svg";
import resource from "../icons/resource.svg";
import temperature from "../icons/temperature.svg";
import cpu from "../icons/cpu.svg";
import ticket from "../icons/tickets.svg";
import power from "../icons/power.svg";
import usb from "../icons/usb.svg";
import battery from "../icons/battery.svg";
import alert from "../icons/alert.svg";

const { Text } = Typography;

const devicedetails = [
  { textone: "On Off Status", texttwo: "ON", icon: power, wid: "18rem" },
  { textone: "USB Plugged", texttwo: "True", icon: usb, wid: "18rem" },
  { textone: "Battery Level", texttwo: "85%", icon: battery, wid: "18rem" },
  { textone: "Volume Levels", texttwo: "7", icon: volume, wid: "18rem" },
  {
    textone: "Network Performance",
    texttwo: "75%",
    icon: network,
    wid: "18rem",
  },
  { textone: "Network Type", texttwo: "4G", icon: networktype, wid: "18rem" },
  {
    textone: "Transaction ",
    texttwo: "2sec.",
    textthree: "Playback Delay",
    icon: transaction,
    wid: "18rem",
  },
  {
    textone: "Transaction ",
    texttwo: "98%",
    textthree: "Success Rate",
    icon: transactionSuccess,
    wid: "18rem",
  },
  { textone: "SDK Version", texttwo: "v5.12.0", icon: sdk, wid: "18rem" },
  { textone: "App version", texttwo: "v3.9.2", icon: app, wid: "18rem" },
  {
    textone: "Resource Version",
    texttwo: "v1.8.3",
    icon: resource,
    wid: "18rem",
  },
  { textone: "Temperature", texttwo: "35°C", icon: temperature, wid: "18rem" },
];

const NetworkCard = () => (
  <>
    <Flex className="mt-5 flex-wrap grid grid-cols-4 gap-6">
      {devicedetails.map(({ textone, texttwo, icon, textthree, wid, sp }) => (
        <Col key={textone} span={sp ? sp : 6}>
          <Card
            style={{ width: wid }}
            className=" flex justify-center flex-col  h-32"
            bordered={false}
          >
            <Row className="justify-between" align="items-center">
              <Col span={17}>
                <Text className="text-[#888888] text-[15px] font-[400] landing-[22.5px]">
                  {textone}
                  <br></br>
                  {textthree}
                </Text>
                <div>
                  <Text className="text-[#2D3748] text-[23px] font-[700] landing-[32.2px]">
                    {texttwo}
                  </Text>
                </div>
              </Col>
              <Col className="flex items-center justify-center">
                <img src={icon} alt="power" />
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Flex>

    <Flex className="mt-5" gap={6}>
      <Col span={12}>
        <Card
          style={{ width: "37rem" }}
          className=" flex justify-center flex-col  h-32"
          bordered={false}
        >
          <Row className="h-full flex items-center justify-between">
            <Col span={7}>
              <Text className="text-[#888888] text-[15px] font-[400] landing-[22.5px]">
                External Memory
              </Text>
              <div>
                <Text className="text-[#2D3748] text-[23px] font-[700] landing-[32.2px]">
                  31.25% Used
                </Text>
              </div>
            </Col>
            <Col className="flex items-center justify-center" span={17}>
              {/* <img src={sdk} alt="sdk" /> */}
            </Col>
          </Row>
        </Card>
      </Col>

      <Col style={{ marginLeft: "6px" }} span={6}>
        <Card
          style={{ width: "18rem" }}
          className=" flex justify-center flex-col  h-32"
          bordered={false}
        >
          <Row className="h-full flex items-center justify-between">
            <Col span={17}>
              <Text className="text-[#888888] text-[15px] font-[400] landing-[22.5px]">
                CPU Usage
              </Text>
              <div>
                <Text className="text-[#2D3748] text-[23px] font-[700] landing-[32.2px]">
                  87%
                </Text>
              </div>
            </Col>
            <Col className="flex items-center justify-center">
              <img src={cpu} alt="cpu" />
            </Col>
          </Row>
        </Card>
      </Col>

      <Col span={6}>
        <Card
          style={{ width: "18rem" }}
          className=" flex justify-center flex-col  h-32"
          bordered={false}
        >
          <Row className="h-full flex items-center justify-between">
            <Col span={17}>
              <Text className="text-[#888888] text-[15px] font-[400] landing-[22.5px]">
                Tickets Raised
              </Text>
              <div>
                <Text className="text-[#2D3748] text-[23px] font-[700] landing-[32.2px]">
                  1
                </Text>
              </div>
            </Col>
            <Col className="flex items-center justify-center">
              <img src={ticket} alt="ticket" />
            </Col>
          </Row>
        </Card>
      </Col>
    </Flex>

    <Col className="mt-5" span={6}>
      <Card
        className=" flex justify-center flex-col w-72 h-32"
        bordered={false}
      >
        <Row className="h-full flex items-center justify-between">
          <Col span={17}>
            <Text className="text-[#888888] text-[15px] font-[400] landing-[22.5px]">
              Alerts
            </Text>
            <div>
              <Text className="text-[#2D3748] text-[23px] font-[700] landing-[32.2px]">
                2
              </Text>
            </div>
          </Col>
          <Col className="flex items-center justify-center">
            <img src={alert} alt="alert" />
          </Col>
        </Row>
      </Card>
    </Col>
  </>
);

export default NetworkCard;
