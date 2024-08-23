import { Flex } from "antd";
import React from "react";

const Sidebar = () => {
  return (
    <Flex style={{ background: "#333", borderRadius: "5px", color: "#fff", margin: "10px 0px 10px 10px" }}>
      <ul className="filter-tasks">
        <li>All Tasks</li>
        <li>Completed</li>
        <li>Pending</li>
      </ul>
    </Flex>
  );
};

export default Sidebar;
