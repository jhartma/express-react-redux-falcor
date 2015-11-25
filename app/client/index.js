// document.write("It works");
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import makeStore from "../core/store"
import CounterContainer from "../components/CounterContainer"
import { Router, Route } from "react-router"
import { retrievePath } from "redux-falcor"

// Create Store
const store = makeStore()

// Load initial values into store
store.dispatch(retrievePath("title"))

// Render App
render((
  <Provider store={store}>
    <Router>
      <Route component={CounterContainer} path="/"/>
    </Router>
  </Provider>
), document.getElementById("app"))
