import Router from "falcor-router"
import store from "./store"

export default new Router([
  {
    route: "title",
    get() {
      return { path: [ "title" ], value: store.title }
    },
    async set(jsonGraph) {
      store.title = jsonGraph.title
      return { path: [ "title" ], value: store.title }
    },
  },
])
