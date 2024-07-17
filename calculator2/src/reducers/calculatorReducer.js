import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value1: "",
  value2: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addNumbers: (state, action) => {
      state.value1 = action.payload;
      state.value2 += action.payload;
    },
    add: (state, action) => {
      state.value1 = "+";
      state.value2 += "+";
    },
    subtract: (state, action) => {
      state.value1 = "-";
      state.value2 += "-";
    },
    multiply: (state, action) => {
      state.value1 = "*";
      state.value2 += "*";
    },
    divide: (state, action) => {
      state.value1 = "/";
      state.value2 += "/";
    },
    clear: (state, action) => {
      state.value1 = "";
      state.value2 = "";
    },
    result: (state, action) => {
      // Use eval to evaluate the expression
      state.value1 = action.payload;
      state.value2 = action.payload;
    },
  },
});

export const {
  addNumbers,
  add,
  subtract,
  multiply,
  divide,
  clear,
  value1,
  value2,
  result,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
