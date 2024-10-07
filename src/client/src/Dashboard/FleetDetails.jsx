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
import AllAlerts from "./AllAlerts";
import AllTickets from "./AllTickets";
import DeviceGraph from "./DeviceGraph";
import DeviceList from "./DeviceList";
import SearchQuery from "./SearchQeury";
import { useNavigate } from "react-router-dom";

export default function FleetDetails({ selectedFleet }) {
  const [deferredQuery, setDeferredQuery] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <Flex justify={"space-between"} className="my-4">
        <Row>
          <div className="fleet-name">{selectedFleet?.name}</div>
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
              onClick={() => navigate("/dashboard/search-query")}
              size="large"
              icon={<FaAngleRight />}
              iconPosition="end"
              className="button"
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
          <AllAlerts />
        </Col>
        <Col span={12}>
          <AllTickets />
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
