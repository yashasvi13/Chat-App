import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./components/reducers";
import { setUser, clearUser } from "./components/actions";
const store = createStore(rootReducer, composeWithDevTools());
const AppwithAuth = withRouter(
  connect(
    null,
    { setUser, clearUser }
  )(App)
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppwithAuth />
    </Router>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
