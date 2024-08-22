import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Counter</button>
    </div>
  );
}

export default App;
