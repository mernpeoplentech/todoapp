import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todosArray: [],
    user: null,
    cart: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todosArray.push(action.payload);
    },
    resetTodo: (state) => {
      state.todosArray = [];
    },
  },
});
export const { addTodo, resetTodo } = todoSlice.actions;

export default todoSlice.reducer;
