import express from "express"
import falcorExpress from "falcor-express"
import cors from "cors"
import bodyParser from "body-parser"
import FalcorRouter from "./router"

let app = express()
let PORT = 3000

const corsOptions = {
  "credentials": true,
  "origin": "http://localhost:8080",
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use("/model.json", cors(corsOptions), falcorExpress.dataSourceRoute( () => {
  return FalcorRouter
}))

// serve static files from current directory
app.use(express.static(__dirname + "/"))

let server = app.listen(PORT, () => {
  let host = server.address().address
  let port = server.address().port

  console.log("Falcor Server listening at http://%s:%s", host, port)
})
