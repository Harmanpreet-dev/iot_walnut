import React, { useState } from "react";
import { Button, Col, Flex, Row } from "antd";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./fleets.css";
import Search from "./Search";
import { FaAngleRight } from "react-icons/fa";
import DevicesLocations from "./DevicesLocations";
import TaskScheduler from "./TaskScheduler";
import DevicesByOperators from "./DevicesByOperators";
import Alerts from "./devices/Alerts";
import Tickets from "./Tickets";
import DeviceGraph from "./DeviceGraph";
import DeviceList from "./DeviceList";

export default function FleetDetails({ selectedFleet }) {
  const [deferredQuery, setDeferredQuery] = useState("");

  return (
    <>
      <Flex justify={"space-between"} className="my-4">
        <Row>
          <div className="fleet-name">{selectedFleet.name}</div>
        </Row>
        <Row gutter={8}>
          <Col>
            <Search
              setDeferredQuery={setDeferredQuery}
              placeholder="Search within Fleet"
            />
          </Col>
          <Col>
            <Button
              size="large"
              icon={<FaAngleRight />}
              iconPosition="end"
              className="icon-button btn-neutral"
            >
              Search Query
            </Button>
          </Col>
        </Row>
      </Flex>
      <Row gutter={8}>
        <Col span={6}>
          <DevicesByOperators />
        </Col>
        <Col span={8}>
          <TaskScheduler />
        </Col>
        <Col span={10}>
          <DevicesLocations />
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Alerts />
        </Col>
        <Col span={12}>
          <Tickets />
        </Col>
      </Row>
      <Row gutter={8}>
        <DeviceGraph />
      </Row>
      <Row gutter={8}>
        <DeviceList />
      </Row>
    </>
  );
}
