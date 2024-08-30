import { Flex } from "antd";
import React from "react";
import FilterTabs from "./FilterTabs";

const Sidebar = () => {
  return (
    <Flex style={{ background: "#333", borderRadius: "10px", color: "#fff", margin: "10px 0px 10px 10px" }}>
      <FilterTabs />
    </Flex>
  );
};

export default Sidebar;
