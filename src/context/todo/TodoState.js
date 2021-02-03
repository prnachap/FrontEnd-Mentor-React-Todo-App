import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import { todoTypes } from "../type";

const TodoState = (props) => {
  const INITIAL_STATE = {
    allItems: [],
    completedItems: [],
    activeItems: [],
  };

  const [state, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  const addItem = (item) => {
    dispatch({ type: todoTypes.ADD_ITEM, payload: item });
  };

  return (
    <TodoContext.Provider value={{ allItems: state.allItems, addItem }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
