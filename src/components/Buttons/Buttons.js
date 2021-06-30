import React from "react";
import "./Buttons.css";

export default function Buttons(props) {
  return (
    <div className="buttons">
      <div
        className="btn"
        onClick={props.handleStart}
      >
        {props.subscription ? "Stop" : "Start"}
      </div>
      <div
        className="btn wait"
        onClick={props.handleDoubleClick}
      >
        Pause(2click)
      </div>
      <div
        className="btn"
        onClick={props.handleReset}
      >
        Reset
      </div>
    </div>
  );
}
