import { Map } from "immutable"
import { expect } from "chai"

import { increment } from "../app/core/action_creators"
import { incrementCounter } from "../app/core/actions"
import makeStore from "../app/core/store"
import reducer from "../app/core/reducer"

describe("application logic", () => {
  describe("incrementCounter", () => {
    it("increments the counter", () => {
      const state = Map({
        counter: 0,
      })
      const nextState = incrementCounter(state)
      expect(nextState).to.equal(Map({
        counter: 1,
      }))
    })
  })

  describe("reducer", () => {
    it("handles INCREMENT_COUNTER", () => {
      const initialState = Map({ counter: 0 })
      const action = increment()
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(Map({
        counter: 1,
      }))
    })

    it("handles INCREMENT_COUNTER with undefined state", () => {
      const action = increment()
      const nextState = reducer(undefined, action)
      expect(nextState).to.equal(Map({
        counter: 1,
      }))
    })
  })

  describe("store", () => {
    it("is a Redux store configured with the correct reducer", () => {
      const store = makeStore()
      expect(store.getState()).to.equal(Map({ counter: 0 }))

      store.dispatch(increment())
      expect(store.getState()).to.equal(Map({
        counter: 1,
      }))
    })
  })
})
