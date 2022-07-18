import React from "react";
import { Resizable } from "re-resizable";
import  "./QuoteComponent.module.css";

const QuoteComponent = () => {
  return (
    <div className="quotes">
      <Resizable
        defaultSize={{
          width: "90vw",
          height: "60vh",
        }}
      >
        <h1>Quote</h1>
        <h3>It is practically impossible to teach good programming to students that have had a prior exposure to BASIC: as potential programmers they are mentally mutilated beyond hope of regeneration.</h3>
      </Resizable>
    </div>
  );
};
export default QuoteComponent;
