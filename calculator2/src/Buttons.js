import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  addNumbers,
  add,
  subtract,
  multiply,
  divide,
  clear,
  value1,
  value2,
  result,
} from "./reducers/calculatorReducer";
import "./App.css";

const Buttons = () => {
  const dispatch = useDispatch();
  const value11 = useSelector((state) => state.calculator.value1);
  const value22 = useSelector((state) => state.calculator.value2);

  const handleNumberClick = (number) => {
    dispatch(addNumbers(number));
  };

  const handleOperationClick = (operation) => {
    switch (operation) {
      case "+":
        dispatch(add());
        break;
      case "-":
        dispatch(subtract());
        break;
      case "*":
        dispatch(multiply());
        break;
      case "/":
        dispatch(divide());
        break;
      default:
        break;
    }
  };

  const handleClearClick = () => {
    dispatch(clear());
  };

  const handleResultClick = () => {
    // dispatch(result(eval(value11)));
    dispatch(result(eval(value22))); // Evaluate the expression
  };
  const handleDecimalClick = () => {
    // Assuming `value1` is the current input value you're working with

    // Check if the current value already contains a decimal point
    if (!value11.includes(".")) {
      dispatch(addNumbers("."));
    }
  };

  return (
    <div className="App">
      <p>Calculus</p>
      <div className="calculator-container">
        <div id="calculator" className="calculator">
          <input
            type="text"
            id="display2"
            className="display"
            value={value22}
            readOnly
          />
          <input
            type="text"
            id="display"
            className="display"
            value={value11}
            placeholder={0}
            readOnly
          />
          <div id="buttons" className="buttons">
            <button id="zero" onClick={() => handleNumberClick("0")}>
              0
            </button>
            <button id="one" onClick={() => handleNumberClick("1")}>
              1
            </button>
            <button id="two" onClick={() => handleNumberClick("2")}>
              2
            </button>
            <button id="three" onClick={() => handleNumberClick("3")}>
              3
            </button>
            <button
              id="add"
              className="operator"
              onClick={() => handleOperationClick("+")}
            >
              +
            </button>
            <button id="four" onClick={() => handleNumberClick("4")}>
              4
            </button>
            <button id="five" onClick={() => handleNumberClick("5")}>
              5
            </button>
            <button id="six" onClick={() => handleNumberClick("6")}>
              6
            </button>
            <button
              id="subtract"
              className="operator"
              onClick={() => handleOperationClick("-")}
            >
              -
            </button>
            <button id="seven" onClick={() => handleNumberClick("7")}>
              7
            </button>
            <button id="eight" onClick={() => handleNumberClick("8")}>
              8
            </button>
            <button id="nine" onClick={() => handleNumberClick("9")}>
              9
            </button>

            <button
              id="multiply"
              className="operator"
              onClick={() => handleOperationClick("*")}
            >
              *
            </button>

            <button
              id="divide"
              className="operator"
              onClick={() => handleOperationClick("/")}
            >
              /
            </button>
            <button
              id="decimal"
              className="operator"
              onClick={() => handleDecimalClick()}
            >
              .
            </button>
            <button
              id="equals"
              className="operator"
              onClick={() => handleResultClick()}
            >
              =
            </button>
            <button
              id="clear"
              className="operator clear"
              onClick={() => handleClearClick()}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    value1: state.calculator.value1,
    value2: state.calculator.value2,
  };
};

export default connect(mapStateToProps, {
  addNumbers,
  add,
  subtract,
  multiply,
  divide,
  clear,
  value1,
  value2,
  result,
})(Buttons);
