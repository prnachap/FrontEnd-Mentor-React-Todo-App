import { todoTypes } from "../type";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case todoTypes.ADD_ITEM:
      return { ...state, allItems: [...state.allItems, payload] };
    default:
      return state;
  }
};
