const fs = require("fs")

for (let i = 0; i < 100; i++) {
  const text = `write: ${i}`
  fs.writeFile("./data.txt", text, (err) => {
    console.error(err)
    return
  })
  // たまたま順番通りになることもある
  console.log(text)
}
