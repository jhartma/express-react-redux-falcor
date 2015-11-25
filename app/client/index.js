// document.write("It works");
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import makeStore from "../core/store"
import CounterContainer from "../components/CounterContainer"
import { Router, Route } from "react-router"
import { retrievePath } from "redux-falcor"

const store = makeStore()
// store.dispatch(setPath("title", "hallo"))

// Load initial values into store
store.dispatch(retrievePath("title"))

render((
  <Provider store={store}>
    <Router>
      <Route component={CounterContainer} path="/"/>
    </Router>
  </Provider>
), document.getElementById("app"))
