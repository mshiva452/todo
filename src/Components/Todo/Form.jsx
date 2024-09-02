import { Button, DatePicker, Flex, Input, Select } from "antd";
import React, { useState } from "react";
import { observer } from "mobx-react";
import taskStore from "../../stores/TaskStore";
const Form = observer(() => {
  const { TextArea } = Input;
  const id = self.crypto.randomUUID().toString();
  const [task, setTask] = useState({
    id: id,
    title: null,
    date: null,
    description: null,
    status: "Pending",
  });
  const saveTask = (e) => {
    const id = self.crypto.randomUUID();
    taskStore.setTask({
      id: id,
      ...task,
    });
    taskStore.toggleModal(false);
  };
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleDateChange = (date, dateString) => {
    setTask({
      ...task,
      date: dateString,
    });
  };
  const updateStatus = (status) => {
    setTask({
      ...task,
      ["status"]: status,
    });
  };
  return (
    <Flex vertical gap={5}>
      <Input type="text" placeholder="Task Name" name="title" onChange={handleChange} />
      <TextArea name="description" placeholder="Task Description" rows={5} onChange={handleChange} />
      <DatePicker onChange={handleDateChange} showTime />
      <Select
        name="status"
        onChange={updateStatus}
        defaultValue="Pending"
        options={[
          {
            label: "Pending",
            value: "Pending",
          },
          {
            label: "Completed",
            value: "Completed",
          },
          {
            label: "Archive",
            value: "Archive",
          },
        ]}
      ></Select>
      <Button onClick={saveTask}>Save Task</Button>
    </Flex>
  );
});

export default Form;
