import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Reagieren from "./components/Reagieren.jsx";
import { configureStore } from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Reagieren />
  </Provider>,
  document.getElementById('reagieren_root')
);
