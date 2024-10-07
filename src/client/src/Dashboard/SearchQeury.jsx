import { Button, Col, Flex, Row, Select } from "antd";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const defaultQqueries = [
  {
    id: 1,
    data: "",
    operator: "",
    value: "",
  },
  {
    id: 2,
    data: "",
    operator: "",
    value: "",
  },
];
const SearchQeury = () => {
  const [queries, setQueries] = useState(defaultQqueries);
  const addMoreQuery = () => {
    setQueries([
      ...queries,
      {
        id: Date.now(),
        data: "",
        operator: "",
        value: "",
      },
    ]);
  };

  const removeQuery = (id) => {
    const remainingQueries = queries.filter((query) => query.id !== id);
    setQueries(remainingQueries);
  };

  return (
    <Flex gap={8} vertical>
      {queries.map((query) => (
        <Row key={query.id} gutter={8}>
          <Col span={8}>
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
          <Col span={6}>
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
          <Col span={9}>
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
          <Col span={1}>
            <div onClick={() => removeQuery(query.id)}>-</div>
          </Col>
        </Row>
      ))}

      <Row>
        <Button
          size="large"
          icon={<FaPlus />}
          iconPosition="start"
          className="w-full"
          onClick={addMoreQuery}
        >
          Add More Query
        </Button>
      </Row>
      <Row>
        <Button size="large" className="button w-full">
          Submit
        </Button>
      </Row>
    </Flex>
  );
};

export default SearchQeury;
