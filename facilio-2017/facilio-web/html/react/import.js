import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ImportBigBoard from "./components/ImportBigBoard.jsx";
import { configureStore } from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ImportBigBoard />
  </Provider>,
  document.getElementById('import_root')
);
