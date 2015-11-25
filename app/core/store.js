import createLogger from "redux-logger"
import { applyMiddleware, createStore } from "redux"
import reducer from "./reducer/reducer"
import { createFalcorMiddleware } from "redux-falcor"
import falcorModel from "./falcor_model"

const logger = createLogger({ logger: console })
const createStoreWithMiddleWare = applyMiddleware(logger, createFalcorMiddleware(falcorModel))(createStore)

export default function makeStore() {
  return createStoreWithMiddleWare(reducer)
}
