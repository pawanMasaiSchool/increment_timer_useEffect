import { useState } from "react";
import Timer from "./Compenents/Timer";
import "./styles.css";

export default function App() {
  const [status, setStatus] = useState(false);

  const changeTheStatus = () => {
    setStatus(!status);
  };

  const Handlestatus = () => {
    return <button onClick={() => setStatus(!status)}>Toggle</button>;
  };

  return (
    <div className="App">
      <h1>Timer</h1>
      {status === true ? (
        <Timer start={0} stop={10} handleStatus={changeTheStatus} />
      ) : (
        <p>----</p>
      )}
      <Handlestatus />
    </div>
  );
}
