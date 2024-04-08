const initialState = false;
export const isDataReducer = (state = initialState, action) => {
  if (action.type === "isData/CHANGE") {
    return !state;
  }
  return state;
};
