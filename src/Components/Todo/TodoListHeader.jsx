import { PlusOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import React from "react";

const TodoListHeader = ({ handleModal }) => {
  return (
    <Flex align="center" justify="space-between">
      <h2 style={{ margin: 0, color: "#fff" }}>All Tasks</h2>
      <PlusOutlined onClick={handleModal} style={{ color: "#fff" }} spin />
    </Flex>
  );
};

export default TodoListHeader;
