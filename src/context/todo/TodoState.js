import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import { todoTypes } from "../type";
import { v4 as uuid4 } from "uuid";

const TodoState = (props) => {
  const INITIAL_STATE = {
    allItems: [],
    completedItems: [],
    activeItems: [],
    type: "all",
    itemsLeft: 0,
  };

  const [state, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  const addItem = (item) => {
    item.id = uuid4();
    dispatch({ type: todoTypes.ADD_ITEM, payload: item });
  };

  const markComplete = (id, type) => {
    if (type) {
      dispatch({ type: todoTypes.MARK_COMPLETE, payload: id });
    } else {
      dispatch({ type: todoTypes.UNDO_COMPLETE, payload: id });
    }
  };

  const getActiveItems = () => {
    dispatch({ type: todoTypes.GET_ACTIVE });
  };
  const getCompletedItems = () => {
    dispatch({ type: todoTypes.GET_COMPLETED });
  };

  const getAllItems = () => {
    dispatch({ type: todoTypes.GET_ALL });
  };

  const deleteItem = (id) => {
    dispatch({ type: todoTypes.DELETE_ITEM, payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: todoTypes.CLEAR_COMPLETED });
  };

  return (
    <TodoContext.Provider
      value={{
        allItems: state.allItems,
        completedItems: state.completedItems,
        activeItems: state.activeItems,
        itemsLeft: state.itemsLeft,
        type: state.type,
        addItem,
        markComplete,
        getActiveItems,
        getCompletedItems,
        getAllItems,
        deleteItem,
        clearCompleted,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
