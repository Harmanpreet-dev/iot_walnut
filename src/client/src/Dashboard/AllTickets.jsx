import { Button, Col, Flex, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Ticket from "./Ticket";

export default function AllTickets() {
  return (
    <div className="rectangle-12 p-4">
      <Flex justify={"space-between"} className="my-4">
        <Col span={12}>
          <div className="fleet-name">Tickets</div>
        </Col>
        <Col>
          <Select
            defaultValue="5"
            size="large"
            style={{ width: "100%" }}
            // onChange={handleChange}
            options={[
              { value: "5", label: "Last 5 days" },
              { value: "10", label: "Last 10 days" },
              { value: "15", label: "Last 15 days" },
              { value: "20", label: "Last 20 days" },
            ]}
          />
        </Col>
        <Col>
          <Button
            size="large"
            icon={<UploadOutlined />}
            iconPosition="end"
            className="button"
          >
            Export
          </Button>
        </Col>
      </Flex>
      <Flex justify={"space-between"} vertical className="my-4 gap-4">
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </Flex>
    </div>
  );
}
