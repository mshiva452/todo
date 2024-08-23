import { useState } from "react";
import "./App.css";
import TaskList from "./Components/Todo/TaskList";
import Sidebar from "./Components/Sidebar";
import { Flex } from "antd";

function App() {
  return (
    <Flex gap={20} style={{ background: "#000", height: "100vh", margin: "0px" }}>
      <Sidebar />
      <TaskList />
    </Flex>
  );
}

export default App;
