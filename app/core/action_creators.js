import { INCREMENT_COUNTER } from "./action_types"

// Action Creators
export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  }
}
