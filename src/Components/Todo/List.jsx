import React, { useState } from "react";
import ListItem from "./ListItem";
import Form from "./Form";
import { PlusOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Flex, Modal } from "antd";

const List = () => {
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
      <Flex align="center" justify="space-between">
        <h2 style={{ margin: 0 }}>All Tasks</h2>
        <Button style={{ borderRadius: "10rem", border: "none" }} onClick={handleModal}>
          <PlusOutlined />
        </Button>
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
        <li onClick={handleModal}>Add Task</li>
      </ul>
    </ConfigProvider>
  );
};

export default List;
