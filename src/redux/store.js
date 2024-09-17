import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("myValue/increment");
export const decrement = createAction("myValue/decrement");

const myReducer = createReducer(10, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      debugger;
      state += action.payload;
    })
    .addCase(decrement, (state, action) => {
      state -= action.payload;
    })
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});