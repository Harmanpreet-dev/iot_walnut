import React, { useEffect, useState } from "react";
import { Breadcrumb, Flex, Row } from "antd";
import Fleets from "./Fleets";
import Search from "./Search";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
import FleetDetails from "./FleetDetails";
import { useDispatch, useSelector } from "react-redux";
import { SET_SELECTED_FLEET } from "../redux/actions/dashboardActions";
import axiosInstance from "../utils/axiosInstance";
import Devices from "./devices/Devices";

export default function Dashboard() {
  const [fleets, setFleets] = useState([]);
  const [filteredFleets, setFilteredFleets] = useState([]);
  const [deferredQuery, setDeferredQuery] = useState("");
  const { selectedFleet } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    getFleets();
  }, []);

  const getFleets = () => {
    axiosInstance.get(`/fleets`).then((res) => {
      const fleets = res.data;
      setFleets(fleets);
      setFilteredFleets(fleets);
      dispatch(SET_SELECTED_FLEET(fleets[0]));
    });
  };

  useEffect(() => {
    const searchQuery = deferredQuery.trim()?.toLowerCase();
    if (searchQuery) {
      const results = fleets.filter((fleet) =>
        fleet.name.toLowerCase().includes(searchQuery)
      );
      setFilteredFleets(results);
    } else {
      setFilteredFleets(fleets);
    }
  }, [deferredQuery]);

  return (
    <div className="content-wrapper ">
      <Breadcrumb
        items={[
          {
            title: "Dashboard",
          },
        ]}
      />
      <div className="rectangle-240">
        <Flex gap="middle" vertical>
          <Row>
            <Search
              setDeferredQuery={setDeferredQuery}
              placeholder="Search Fleets..."
            />
          </Row>
          <Row>
            <Fleets
              filteredFleets={filteredFleets}
              selectedFleet={selectedFleet}
            />
          </Row>
        </Flex>
      </div>
      <FleetDetails selectedFleet={selectedFleet} />
      <Devices />
    </div>
  );
}
