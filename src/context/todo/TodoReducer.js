/* eslint-disable import/no-anonymous-default-export */
import { todoTypes } from "../type";

const countItemsLeft = (arr, status) => {
  return arr.reduce((acc, currentValue) => {
    if (currentValue.status !== status) {
      acc++;
    }
    return acc;
  }, 0);
};

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case todoTypes.ADD_ITEM:
      return {
        ...state,
        allItems: [...state.allItems, payload],
        itemsLeft: countItemsLeft([...state.allItems, payload], "completed"),
        // itemsLeft: [...state.allItems, payload].reduce((acc, currentValue) => {
        //   if (currentValue.status !== "completed") {
        //     acc++;
        //   }
        //   return acc;
        // }, 0),
      };

    case todoTypes.MARK_COMPLETE:
      return {
        ...state,
        allItems: state.allItems.map((item) =>
          item.id === payload ? { ...item, status: "completed" } : item
        ),
        itemsLeft: countItemsLeft(
          state.allItems.map((item) =>
            item.id === payload ? { ...item, status: "completed" } : item
          ),
          "completed"
        ),
        // itemsLeft: state.allItems
        //   .map((item) =>
        //     item.id === payload ? { ...item, status: "completed" } : item
        //   )
        //   .reduce((acc, currentValue) => {
        //     if (currentValue.status !== "completed") {
        //       acc++;
        //     }
        //     return acc;
        //   }, 0),
      };
    case todoTypes.UNDO_COMPLETE:
      return {
        ...state,
        allItems: state.allItems.map((item) =>
          item.id === payload ? { ...item, status: "active" } : item
        ),
        itemsLeft: countItemsLeft(
          state.allItems.map((item) =>
            item.id === payload ? { ...item, status: "active" } : item
          ),
          "completed"
        ),
      };
    case todoTypes.GET_ACTIVE:
      return {
        ...state,
        activeItems: [...state.allItems].filter(
          (item) => item.status === "active"
        ),
        type: "active",
      };
    case todoTypes.GET_COMPLETED:
      return {
        ...state,
        completedItems: [...state.allItems].filter(
          (item) => item.status === "completed"
        ),
        type: "completed",
      };
    case todoTypes.GET_ALL:
      return {
        ...state,
        type: "all",
      };
    case todoTypes.DELETE_ITEM:
      return {
        ...state,
        allItems: [...state.allItems].filter((item) => item.id !== payload),
        activeItems: [...state.activeItems].filter(
          (item) => item.id !== payload
        ),
        completedItems: [...state.completedItems].filter(
          (item) => item.id !== payload
        ),
        itemsLeft: countItemsLeft(
          [...state.allItems].filter((item) => item.id !== payload),
          "completed"
        ),
      };
    case todoTypes.CLEAR_COMPLETED:
      return {
        ...state,
        allItems: [...state.allItems].filter(
          (item) => item.status !== "completed"
        ),
        completedItems: [],
      };
    default:
      return state;
  }
};
