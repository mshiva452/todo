import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import React from "react";
import { motion } from "framer-motion";
const ListItem = ({ item }) => {
  return (
    <li>
      <motion.div
        layout
        initial={{ opacity: 0, x: -400, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 200, scale: 1.2 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <h4>{item.title}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis architecto sed quae illo nostrum. Nihil.</p>
        <Flex justify="space-between" style={{ width: "100%" }} align="center">
          <Button type="default">Completed</Button>
          <Flex justify="space-between" align="center" style={{ width: "40px" }}>
            <EditOutlined />
            <DeleteOutlined />
          </Flex>
        </Flex>
      </motion.div>
    </li>
  );
};

export default ListItem;
