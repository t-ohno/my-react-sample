import { combineReducers } from "@reduxjs/toolkit";
import counterModule from "modules/counterModule";

const rootReducer = combineReducers({
  counter: counterModule.reducer
});

export default rootReducer;
