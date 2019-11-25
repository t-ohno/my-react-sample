import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import * as serviceWorker from "serviceWorker";
import App from "App";
import { Provider } from "react-redux";
import "i18n";
import rootReducer from "reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  language: "ja",
  counter: 0
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
