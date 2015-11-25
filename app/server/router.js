import Router from "falcor-router"
import store from "./store"
import User from "./db/models/User"

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
  {
    route: "user",
    get() {
      return User.findOne({ where: { firstName: "John" } }).then( (user) => {
        return { path: [ "user" ], value: user.dataValues.firstName }
      })
    },
  },
])
