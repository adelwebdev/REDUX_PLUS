import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./styles/index.scss";
import rootReducer from "./reducers";
import { getPosts } from "./actions/post.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getPosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
