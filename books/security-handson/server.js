const express = require("express")
const app = express()
const port = 3002

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.end("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
