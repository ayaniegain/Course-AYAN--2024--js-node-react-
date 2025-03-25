import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: function (state, action) {
      return (state += 1);
    },
    decrement: function (state, action) {
      return (state -= 1);
    },
    incByValue: function (state, action) {
      return (state += action.payload);
    },
  },
});

export const { increment, decrement, incByValue } = counterSlice.actions;

export default counterSlice.reducer;
