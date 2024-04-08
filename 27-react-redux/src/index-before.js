import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

function reducer(numberState = 1, action) {
  if (action.type === "증가") {
    return ++numberState;
  } else if (action.type === "감소") {
    return --numberState;
  } else {
    return numberState;
  }
}

const store = configureStore({ reducer: reducer });
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
