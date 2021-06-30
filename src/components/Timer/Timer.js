import React from "react";
import "./Timer.css";

export default function Timer({ time }) {
  return (
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor(time / 3600)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 60) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor(time % 60)).slice(-2)}
      </span>
    </div>
  );
}