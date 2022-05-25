import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,  Switch, Route  } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import reportWebVitals from "./reportWebVitals";

import Register from './components/Register';
import App from "./App";
import HomePage from "./components/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <Switch>
            <Route path="/" exact={true} component={Register} />
            <Route path="/home/:name" component={HomePage} />
            <Route path="/app" component={App} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

