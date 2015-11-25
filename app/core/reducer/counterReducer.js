import { Map } from "immutable"
import { INCREMENT_COUNTER } from "../action_types"
import { incrementCounter } from "../actions"

export default function counterReducer(state = Map({ counter: 0 }), action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return incrementCounter(state)
  default:
    return state
  }
}
