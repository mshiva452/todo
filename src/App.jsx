import { AnimatePresence } from "framer-motion";
import "./App.css";
import TaskList from "./Components/Todo/TaskList";
import Sidebar from "./Components/Sidebar";
import { Flex } from "antd";
import { observer } from "mobx-react";

const App = observer(() => {
  return (
    <Flex style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Flex style={{ flexGrow: 1, height: "100vh", display: "flex", flexDirection: "column" }}>
        <Flex className="container" gap={20} style={{ background: "#000", height: "100%", margin: "0px" }}>
          <Sidebar />
          <TaskList />
        </Flex>
      </Flex>
    </Flex>
  );
});

export default App;
