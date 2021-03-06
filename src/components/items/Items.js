import React, { useContext, Fragment } from "react";
import "./item.scss";
import Item from "../item-list/ItemList";
import StatusBar from "../statusbar/StatusBar";
import TodoContext from "../../context/todo/TodoContext";

const Items = () => {
  const todoContext = useContext(TodoContext);
  const {
    allItems,
    completedItems,
    activeItems,
    itemsLeft,
    type,
    getActiveItems,
    getCompletedItems,
    getAllItems,
    clearCompleted,
  } = todoContext;

  let data =
    type === "active"
      ? activeItems
      : type === "completed"
      ? completedItems
      : allItems;

  const onCompleteHandler = () => {
    getCompletedItems();
  };

  const onActiveHandler = () => {
    getActiveItems();
  };

  const onAllHandler = () => {
    getAllItems();
  };

  return (
    <Fragment>
      <div className="items container">
        <ul className="items__list">
          {data.map((item, index) => (
            <Item key={index} index={index} item={item} />
          ))}
        </ul>
        <div className="items__metric">
          <p className="items__left">{`${itemsLeft} items left`}</p>
          <div className="items__status">
            <h4
              className={`items__status ${
                type === "all" && "items__status--active"
              }`}
              onClick={onAllHandler}
            >
              All
            </h4>
            <h4
              className={`items__status ${
                type === "active" && "items__status--active"
              }`}
              onClick={onActiveHandler}
            >
              Active
            </h4>
            <h4
              className={`items__status ${
                type === "completed" && "items__status--active"
              }`}
              onClick={onCompleteHandler}
            >
              Completed
            </h4>
          </div>
          <p className="items__clear" onClick={() => clearCompleted()}>
            Clear Completed
          </p>
        </div>
      </div>
      <StatusBar
        onComplete={onCompleteHandler}
        onActive={onActiveHandler}
        onAll={onAllHandler}
type={type}
      />
    </Fragment>
  );
};

export default Items;
// {data.length >= 1 && (
//   <p className="caption" style={{ textAlign: "center" }}>
//     Drag and drop to reorder list
//   </p>
// )}
