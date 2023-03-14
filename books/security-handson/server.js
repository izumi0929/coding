const express = require("express")
const api = require("./routes/api")
const app = express()
const port = 3002

app.set("view engine", "ejs")

app.use(express.static("public"))

app.use("/api", api)

app.get("/", (req, res) => {
  res.end("Hello World!")
})

app.get("/csp", (req, res) => {
  res.render("csp")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
