let express = require("express")
let app = express()
const PORT = process.env.port || 3000

let morgan = require("morgan")
let bodyParser = require("body-parser")

app.disable("x-powered-by")
app.use(morgan("dev"))
app.use(bodyParser.json())

app.get("/dogs", (req, res, next) => {
  res.json({ message: "woof" })
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((reg, res, next) => {
  res.status(404).json({ error: { message: "Not Found" }})
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
