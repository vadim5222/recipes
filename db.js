const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Recipes")
.then(()=>{
  console.log('Успешное подключение')
}).catch((error) =>{
  console.log(`Ошибка подключения ${error}`)
})

