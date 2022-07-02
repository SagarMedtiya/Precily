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
        <h1>Quote of the day is</h1>
        <p>
            See, you not only have to be a good coder to create a system like Linux, you have to be a sneaky bastard too ;-)
        </p>
      </Resizable>
    </div>
  );
};
export default QuoteComponent;
