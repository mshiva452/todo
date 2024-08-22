import { Button, DatePicker, Flex, Input } from "antd";
import React, { useRef, useState } from "react";

const Form = ({ handleTask }) => {
  const { TextArea } = Input;
  const taskRef = useRef(null);
  const descRef = useRef(null);
  const dateRef = useRef(null);
  const handleSubmit = () => {
    if (taskRef.current.value !== "") {
      const id = self.crypto.randomUUID();
      handleTask({ id: id, title: taskRef.current.value });
      taskRef.current.value = "";
    }
  };
  return (
    <Flex vertical gap={5}>
      <input type="text" placeholder="Task Name" ref={taskRef} />
      {/*   <TextArea name="description" placeholder="Task Description" rows={5} ref={descRef} />
      <DatePicker ref={dateRef} /> */}
      <Button onClick={handleSubmit}>Save Task</Button>
    </Flex>
  );
};

export default Form;
