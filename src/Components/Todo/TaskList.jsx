import React, { useState } from "react";
import ListItem from "./ListItem";
import Form from "./Form";
import { PlusOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Flex, Modal } from "antd";

const TaskList = () => {
  const [task, setTask] = useState([]);
  const [showModal, setModal] = useState(false);
  const handleTask = (inputvalue) => {
    setTask([...task, inputvalue]);
    handleModal();
  };
  const handleModal = () => {
    setModal(!showModal);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultColor: "#fff",
            defaultBg: "green",
            defaultBorderColor: "green",
            defaultHoverColor: "#fff",
            defaultHoverBg: "green",
            defaultHoverBorderColor: "green",
          },
        },
      }}
    >
      <Flex vertical style={{ width: "100%", background: "#333", padding: "10px 15px", borderRadius: "10px", margin: "10px 10px 10px 0px" }}>
        <Flex align="center" justify="space-between">
          <h2 style={{ margin: 0, color: "#fff" }}>All Tasks</h2>
          <PlusOutlined onClick={handleModal} style={{ color: "#fff" }} />
        </Flex>
        <ul className="card">
          {task?.map((item, index) => {
            return <ListItem item={item} key={index} />;
          })}
          {showModal && (
            <Modal onClose={handleModal} onCancel={handleModal} closable centered open={showModal} footer={<></>} title="Add Task">
              <Form handleTask={handleTask} />
            </Modal>
          )}
          <li onClick={handleModal} style={{ alignItems: "center", justifyContent: "center" }}>
            <PlusOutlined />
          </li>
        </ul>
      </Flex>
    </ConfigProvider>
  );
};

export default TaskList;
