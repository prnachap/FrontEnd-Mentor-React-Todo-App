import React from "react";
import "./item-list.scss";
import CloseIcon from "../../assets/icon-cross.svg";
import CheckIcon from "../../assets/icon-check.svg";

const ItemList = () => {
  return (
    <div className="item">
      <div className="item__content">
        <div className="item__circle-outer">
          <div className="item__circle-inner item__circle-inner--active">
            <img src={CheckIcon} alt="" className="item__check" />
          </div>
        </div>
        <p className="item__description item__description--completed">
          Jog around the park 3x
        </p>
      </div>
      <div className="item__icon-container">
        <img src={CloseIcon} alt="close icon" className="item__icon" />
      </div>
    </div>
  );
};

export default ItemList;
