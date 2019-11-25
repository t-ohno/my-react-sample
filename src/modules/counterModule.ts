import { createSlice } from "@reduxjs/toolkit";

// createSlice() で actions と reducers を一気に生成
const counterModule = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    reset: () => 0
  }
});

export default counterModule;
