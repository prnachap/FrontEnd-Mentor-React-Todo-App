import React, { useState, useContext } from "react";
import "./item-list.scss";
import CloseIcon from "../../assets/icon-cross.svg";
import CheckIcon from "../../assets/icon-check.svg";
import TodoContext from "../../context/todo/TodoContext";

const ItemList = ({ item }) => {
  const { id, title, status } = item;
  const [complete, setComplete] = useState(true);
  const todoContext = useContext(TodoContext);

  const { markComplete, deleteItem } = todoContext;

  const onClickHandler = () => {
    setComplete(!complete);
    markComplete(id, complete);
  };

  const onDeleteHandler = () => {
    deleteItem(id);
  };

  return (
    <li className="item">
      <div className="item__content">
        <div className="item__circle-outer" onClick={onClickHandler}>
          <div
            className={`item__circle-inner ${
              status === "completed" ? "item__circle-inner--active" : null
            }`}
          >
            {status === "completed" && (
              <img src={CheckIcon} alt="" className="item__check" />
            )}
          </div>
        </div>
        <p
          className={`item__description ${
            status === "completed" ? "item__description--completed" : null
          }`}
        >
          {title}
        </p>
      </div>
      <div className="item__icon-container" onClick={onDeleteHandler}>
        <img src={CloseIcon} alt="close icon" className="item__icon" />
      </div>
    </li>
  );
};

export default ItemList;
