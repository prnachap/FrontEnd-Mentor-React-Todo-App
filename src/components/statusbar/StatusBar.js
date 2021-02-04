import React from "react";
import "./statusbar.scss";

const StatusBar = ({ onComplete, onActive, onAll }) => {
  return (
    <div className="status-mobile container">
      <h4
        className="status-mobile__text status-mobile__text--active  "
        onClick={onAll}
      >
        All
      </h4>
      <h4 className="status-mobile__text" onClick={onActive}>
        Active
      </h4>
      <h4 className="status-mobile__text" onClick={onComplete}>
        Completed
      </h4>
    </div>
  );
};

export default StatusBar;
