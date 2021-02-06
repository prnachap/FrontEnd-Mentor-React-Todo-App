import React from "react";
import "./statusbar.scss";

const StatusBar = ({ onComplete, onActive, onAll, type }) => {
  return (
    <div className="status-mobile container">
      <h4
        className={`status-mobile__text ${
          type === "all" && "status-mobile__text--active"
        }`}
        onClick={onAll}
      >
        All
      </h4>
      <h4
        className={`status-mobile__text ${
          type === "active" && "status-mobile__text--active"
        }`}
        onClick={onActive}
      >
        Active
      </h4>
      <h4
        onClick={onComplete}
        className={`status-mobile__text ${
          type === "completed" && "status-mobile__text--active"
        }`}
      >
        Completed
      </h4>
    </div>
  );
};

export default StatusBar;
