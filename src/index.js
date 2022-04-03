import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {subscribe} from "./redux/state";
import {store} from "./redux/state"
import storeRedux from "./redux/store-redux";
//import rerenderEntireTree from './render';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App store = {storeRedux} state={state} dispatch = {storeRedux.dispatch.bind(storeRedux)} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

rerenderEntireTree(storeRedux.getState());
storeRedux.subscribe( () => {
  let state = storeRedux.getState();
  rerenderEntireTree(state);
} );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
