const crypto = require("crypto")
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
  const nonceValue = crypto.randomBytes(16).toString("base64")
  res.header(`Content-Security-Policy", "script-src 'nonce-${nonceValue}'`)
  res.render("csp", { nonce: nonceValue })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
