const express = require("express")
const app = express()
const port = 3000;

app.use(express.json())

app.get('/', (req, res) =>{
  res.send("Привет")
})

app.listen(port, () =>{
  console.log("Сервер запущен")
})
