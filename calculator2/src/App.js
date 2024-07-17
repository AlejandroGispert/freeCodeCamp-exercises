import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Buttons from "./Buttons";

const App = () => {
  return (
    <Provider store={store}>
      <Buttons />
    </Provider>
  );
};

export default App;
