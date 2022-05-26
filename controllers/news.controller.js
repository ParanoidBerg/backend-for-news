const News = require('../models/news.model')

module.exports.newsController = {
    postNews: (req, res) => {
        News.create ({
            title: req.body.title,
            text: req.body.text,
            categoriesId: req.body.categoriesId,
        }).then(()=>{
            res.json('Новость добавлена')
        })
    },

    deleteNews: (req, res) => {
        News.findByIdAndRemove(req.params.id).then(()=> {res.json('Новость удалена')})
    },

    patchNews: (req, res) => {
        News.findByIdAndUpdate(req.params.id, {title: req.body.title, text: req.body.text, categoriesId: req.body.categoriesId})
        .then(()=>{res.json('Новость изменена')})
    },

    getNews: (req, res) => {
        News.find().then((data) => {res.json(data)})
    },

    getNewsById: (req, res) => {
        News.findById(req.params.id).then((data) => {res.json(data)})
    },

    getNewsByCat: (req, res) => {
        News.find({categoriesId: req.params.id}).then((data) => {res.json(data)})
    },



}