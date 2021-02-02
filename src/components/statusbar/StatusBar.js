import React from "react";
import "./statusbar.scss";

const StatusBar = () => {
  return (
    <div className="status-mobile container">
      <h4 className="status-mobile__text status-mobile__text--active  ">All</h4>
      <h4 className="status-mobile__text">Active</h4>
      <h4 className="status-mobile__text">Completed</h4>
    </div>
  );
};

export default StatusBar;
