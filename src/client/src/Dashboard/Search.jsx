import { Input } from "antd";
import React, { useDeferredValue, useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

export default function Search({ setDeferredQuery, placeholder }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    setDeferredQuery(deferredQuery);
  }, [deferredQuery]);

  return (
    <Input
      size="large"
      placeholder={placeholder}
      prefix={<SearchOutlined />}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
