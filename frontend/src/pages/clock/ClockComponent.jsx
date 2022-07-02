import React, { useState, useEffect } from "react";
import { Resizable } from "re-resizable";
import "react-clock/dist/Clock.css";
import Clock from "react-clock";

import styles from "./ClockComponent.module.css";

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Resizable
        className={styles.clockStyle}
        defaultSize={{
          width: "30vw",
          height: "70vh",
        }}
      >
        <Clock value={time} />
      </Resizable>
    </div>
  );
};

export default ClockComponent;
