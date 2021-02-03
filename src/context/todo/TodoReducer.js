import { todoTypes } from "../type";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case todoTypes.ADD_ITEM:
      return {
        ...state,
        allItems: [...state.allItems, payload],
        itemsLeft: [...state.allItems].filter((item) => item !== "completed")
          .length,
      };

    case todoTypes.MARK_COMPLETE:
      return {
        ...state,
        allItems: state.allItems.map((item) =>
          item.id === payload ? { ...item, status: "completed" } : item
        ),
        itemsLeft: [...state.allItems].filter((item) => item !== "completed")
          .length,
      };
    case todoTypes.UNDO_COMPLETE:
      return {
        ...state,
        allItems: state.allItems.map((item) =>
          item.id === payload ? { ...item, status: "active" } : item
        ),
        itemsLeft: [...state.allItems].filter((item) => item !== "completed")
          .length,
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
        activeItems: [...state.allItems].filter((item) => item.id !== payload),
        completedItems: [...state.allItems].filter(
          (item) => item.id !== payload
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
