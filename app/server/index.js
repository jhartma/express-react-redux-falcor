import express from "express"
import falcorExpress from "falcor-express"
import Router from "falcor-router"
import cors from "cors"
import bodyParser from "body-parser"

let app = express()
let PORT = 3000

const corsOptions = {
  "credentials": true,
  "origin": "http://localhost:8080",
}

const store = {
  title: "Hellos",
}
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/model.json", cors(corsOptions), falcorExpress.dataSourceRoute( () => {
  return new Router([
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
}))

// serve static files from current directory
app.use(express.static(__dirname + "/"))

let server = app.listen(PORT, () => {
  let host = server.address().address
  let port = server.address().port

  console.log("Falcor Server listening at http://%s:%s", host, port)
})
