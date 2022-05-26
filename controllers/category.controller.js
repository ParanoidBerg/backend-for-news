const Category = require('../models/category.model')

module.exports.categoryController = {
    postCategory: (req, res) => {
        Category.create ({
            categoryName: req.body.categoryName
        }).then(()=>{res.json('Категория добавлена')})
    },
    
    deleteCategory: (req, res) => {
        Category.findByIdAndDelete(req.params.id).then(()=> {res.json('Категория удалена')})
    },

    getCategory: (req, res) => {
        Category.find().then((data) => {res.json(data)})
    }
}