import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
import "./App.css";

// Redux slice
const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    display: "0",
    previousValue: null,
    operator: null,
  },
  reducers: {
    inputDigit: (state, action) => {
      state.display =
        state.display === "0" ? action.payload : state.display + action.payload;
    },
    inputOperator: (state, action) => {
      state.previousValue = parseFloat(state.display);
      state.display = "0";
      state.operator = action.payload;
    },
    calculate: (state) => {
      const current = parseFloat(state.display);
      let result = 0;
      switch (state.operator) {
        case "+":
          result = state.previousValue + current;
          break;
        case "-":
          result = state.previousValue - current;
          break;
        case "*":
          result = state.previousValue * current;
          break;
        case "/":
          result = state.previousValue / current;
          break;
        default:
          return;
      }
      state.display = result.toString();
      state.previousValue = null;
      state.operator = null;
    },
    clear: (state) => {
      state.display = "0";
      state.previousValue = null;
      state.operator = null;
    },
  },
});

const { inputDigit, inputOperator, calculate, clear } = calculatorSlice.actions;

const store = configureStore({
  reducer: calculatorSlice.reducer,
});

const Calculator = () => {
  const display = useSelector((state) => state.display);
  const dispatch = useDispatch();

  const handleDigit = (digit) => dispatch(inputDigit(digit));
  const handleOperator = (op) => dispatch(inputOperator(op));
  const handleCalculate = () => dispatch(calculate());
  const handleClear = () => dispatch(clear());

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          {["7", "8", "9", "/"].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "/" ? handleOperator(btn) : handleDigit(btn)
              }
              className={btn === "/" ? "operator" : ""}
            >
              {btn}
            </button>
          ))}
          {["4", "5", "6", "*"].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "*" ? handleOperator(btn) : handleDigit(btn)
              }
              className={btn === "*" ? "operator" : ""}
            >
              {btn}
            </button>
          ))}
          {["1", "2", "3", "-"].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "-" ? handleOperator(btn) : handleDigit(btn)
              }
              className={btn === "-" ? "operator" : ""}
            >
              {btn}
            </button>
          ))}
          <button onClick={() => handleDigit("0")}>0</button>
          <button onClick={() => handleDigit(".")}>.</button>
          <button onClick={handleCalculate} className="equals">
            =
          </button>
          <button onClick={() => handleOperator("+")} className="operator">
            +
          </button>
          <button onClick={handleClear} className="clear">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <Calculator />
  </Provider>
);

export default App;
