const Comment = require('../models/comment.model')

module.exports.commentController = {
    postComment: (req, res) => {
        Comment.create ({
            commentersName: req.body.commentersName,
            commentText: req.body.commentText,
            newsId: req.body.newsId,
        }).then(()=>{
            res.json('Комменатрий добавлен')
        })
    },

    deleteComment: (req, res) => {
        Comment.findByIdAndRemove(req.params.id).then(()=> {res.json('Комментарий удален')})

       },

    getComment:(req, res) => {
        Comment.find({newsId: req.params.id}).then((data)=>{res.json(data)})
    }
}