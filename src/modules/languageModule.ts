import { createSlice } from "@reduxjs/toolkit";

const languageModule = createSlice({
  name: "language",
  initialState: "ja",
  reducers: {
    lang: (state, newValue) => {
      return state !== newValue.payload ? newValue.payload : state;
    }
  }
});

export default languageModule;
