import { combineReducers } from "redux"
import { falcorReducer } from "redux-falcor"
import counterReducer from "./counterReducer"

const reducer = combineReducers({
  falcorReducer: falcorReducer,
  counterReducer,
})

export default reducer
