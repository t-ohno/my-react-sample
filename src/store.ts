import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "reducers/rootReducer";

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()]
  });
