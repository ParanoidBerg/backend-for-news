const mongoose = require("mongoose");
const express = require('express');
const { request } = require("http");
const app = express()
const port = 3000

app.use(express.json());
app.use(require('./routes/news.route'))
app.use(require('./routes/category.route'))
app.use(require('./routes/comments.route'))




mongoose.connect("mongodb+srv://Deni:2479@cluster0.elkeumb.mongodb.net/news?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(port, () => {
    console.log(`Сервер успешно запущен http://localhost:${port}`)
})