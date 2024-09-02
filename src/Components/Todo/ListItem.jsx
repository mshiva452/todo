import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import React from "react";
import { motion } from "framer-motion";
const ListItem = ({ item }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -400, scale: 0.5 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 200, scale: 1.2 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <li>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <Flex justify="space-between" style={{ width: "100%" }} align="center">
          {item.status === "Completed" ? (
            <Button type="primary" ghost>
              {item.status}
            </Button>
          ) : null}
          {item.status === "Pending" ? (
            <Button type="default" ghost danger>
              {item.status}
            </Button>
          ) : null}
          {item.status === "Archive" ? (
            <Button type="default" ghost>
              {item.status}
            </Button>
          ) : null}
          <Flex justify="space-between" align="center" style={{ width: "40px" }}>
            <EditOutlined />
            <DeleteOutlined />
          </Flex>
        </Flex>
      </li>
    </motion.div>
  );
};

export default ListItem;
