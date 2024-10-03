import { Flex, Row, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./filter.css";
import { useEffect, useState } from "react";

export default function Filter({ title }) {
  const [selected, setSelected] = useState("today");
  useEffect(() => {}, [selected]);

  return (
    <div className="my-4">
      <div className="header">{title}</div>
      <Flex gap={8} justify="space-between">
        <Flex gap={8} justify="space-between">
          <Button
            onClick={() => setSelected("today")}
            size="large"
            className={selected === "today" ? "button" : "inactive"}
          >
            Today
          </Button>
          <Button
            onClick={() => setSelected("yesterday")}
            size="large"
            className={selected === "yesterday" ? "button" : "inactive"}
          >
            Yesterday
          </Button>
          <Button
            onClick={() => setSelected("last_10_days")}
            size="large"
            className={selected === "last_10_days" ? "button" : "inactive"}
          >
            Last 10 Days
          </Button>
          <Button
            onClick={() => setSelected("last_30_days")}
            size="large"
            className={selected === "last_30_days" ? "button" : "inactive"}
          >
            Last 30 Days
          </Button>
          <Button
            onClick={() => setSelected("all_data")}
            size="large"
            className={selected === "all_data" ? "button" : "inactive"}
          >
            All Data
          </Button>
        </Flex>
        <Row>
          <Button
            size="large"
            icon={<UploadOutlined />}
            iconPosition="end"
            className="button"
          >
            Export
          </Button>
        </Row>
      </Flex>
    </div>
  );
}
