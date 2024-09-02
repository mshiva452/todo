import React, { useState } from "react";

import ListItem from "./ListItem";
import Form from "./Form";
import { PlusOutlined } from "@ant-design/icons";
import { ConfigProvider, Flex, Modal } from "antd";
import TodoListHeader from "./TodoListHeader";
import taskStore from "../../stores/TaskStore";
import { observer } from "mobx-react";
const theme = {
  Button: {
    defaultColor: "#fff",
    defaultBg: "green",
    defaultBorderColor: "green",
    defaultHoverColor: "#fff",
    defaultHoverBg: "green",
    defaultHoverBorderColor: "green",
  },
};
const TaskList = observer(() => {
  const handleModal = () => {
    taskStore.toggleModal(!taskStore.showModal);
  };
  return (
    <ConfigProvider
      theme={{
        components: theme,
      }}
    >
      <Flex vertical style={{ width: "100%", background: "#333", padding: "10px 15px", borderRadius: "10px", margin: "10px 10px 10px 0px" }}>
        <TodoListHeader handleModal={handleModal} />
        <ul className="card">
          {taskStore?.tasks?.map((item, index) => {
            return <ListItem item={item} key={index} />;
          })}
          <li onClick={handleModal} style={{ alignItems: "center", justifyContent: "center" }}>
            <PlusOutlined />
          </li>
        </ul>

        {taskStore.showModal && (
          <Modal onClose={handleModal} onCancel={handleModal} closable centered open={taskStore.showModal} footer={<></>} title="Add Task">
            <Form />
          </Modal>
        )}
      </Flex>
    </ConfigProvider>
  );
});

export default TaskList;
