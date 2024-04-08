const initialState = 0;
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const countMinus = () => {
  return { type: DECREMENT };
};
export const countPlus = () => ({ type: INCREMENT });

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/INCREMENT":
      return state + 1;
    case "counter/DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
