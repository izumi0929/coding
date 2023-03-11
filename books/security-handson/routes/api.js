const express = require("express")
const router = express.Router()

const allowedList = ["http://localhost:3002", "http://site.example:3002"]

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3002")

  if (req.headers.origin && allowedList.includes(req.headers.origin)) {
    res.header("Access-Control-Allow-Origin", req.headers.origin)
  }

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Headers", "X-Token")
  }
  next()
})

router.get("/", (req, res) => {
  res.setHeader("X-Timestamp", Date.now())
  let message = req.query.message
  const lang = req.headers["x-lang"]
  if (message === "") {
    res.status(400)
    if (lang === "en") {
      message = "message is empty"
    } else {
      message = "メッセージが空です"
    }
  }
  res.send({ message })
})

router.use(express.json())
router.post("/", (req, res) => {
  const body = req.body
  console.log(body)
  res.end()
})

module.exports = router
