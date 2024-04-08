import { combineReducers } from "redux";
import { todoReducer } from "./module/todo";

export default combineReducers({
  todo: todoReducer,
});
