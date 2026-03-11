const express = require("express")
const app = express()
const mongoose = require('./db')
const recipesRouters = require('./routers/recipe.router')
const port = 3000;

app.use(express.json())



app.get('/', (req, res) =>{
  res.send("Привет")
})
app.use('/api/recipes', recipesRouters)

app.listen(port, () =>{
  console.log("Сервер запущен")
})
