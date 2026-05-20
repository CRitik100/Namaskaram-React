import { createSlice } from "@reduxjs/toolkit";


/****
 * When createSlice is called, it returns an object with 2 properties:
 * 1. reducer: A function that can be used as a reducer in the store which is responsible for updating the state based on the action dispatched.
 * 2. actions: An object that contains the action creators for the reducers defined in the slice.
 * 
 */

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state overhere.
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
