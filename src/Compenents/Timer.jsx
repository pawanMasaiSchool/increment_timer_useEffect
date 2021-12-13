import { useEffect, useState } from "react";
export default function Timer({ start, stop, handleStatus }) {
  const [time, setTime] = useState(start);
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        if (prev === stop) {
          clearInterval(id);
          handleStatus();
          alert("It has reached the end time");
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      console.log("Cleaning Up");
      clearInterval(id);
    };
  }, [time]);

  return (
    <>
      <p>
        Starting at {start} ------- Ending at {stop}
      </p>
      <div>Seconds:{time}</div>
    </>
  );
}
