import React, { Fragment } from "react";
import "./item.scss";
import Item from "../item-list/ItemList";
import StatusBar from "../statusbar/StatusBar";

const Items = () => {
  return (
    <Fragment>
      <div className="items container">
        <div className="items__metric">
          <p className="items__left">5 items left</p>
          <div className="items__status">
            <h4 className="items__status items__status--active  ">All</h4>
            <h4 className="items__status items__status">Active</h4>
            <h4 className="items__status items__status">Completed</h4>
          </div>
          <p className="items__clear">Clear Completed</p>
        </div>
      </div>
      <StatusBar />
    </Fragment>
  );
};

export default Items;
