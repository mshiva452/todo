import { useState } from "react";
import "./App.css";
import List from "./Components/Todo/List";

function App() {
  return (
    <div style={{ background: "#565656", width: "100%", height: "100vh", padding: "0", margin: "0px" }}>
      <List />
    </div>
  );
}

export default App;
