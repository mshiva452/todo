import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import React from "react";

const ListItem = ({ item }) => {
  return (
    <li>
      <h4>{item.title}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis architecto sed quae illo nostrum. Nihil.</p>
      <Flex justify="space-between" style={{ width: "100%" }} align="center">
        <Button type="default">Completed</Button>
        <Flex justify="space-between" align="center" style={{ width: "40px" }}>
          <EditOutlined />
          <DeleteOutlined />
        </Flex>
      </Flex>
    </li>
  );
};

export default ListItem;
