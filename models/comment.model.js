const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    commentersName: String,
    commentText: String,
    newsId: {
        ref: 'News',
        type: mongoose.SchemaTypes.ObjectId
    }
    
    
})

const Comments = mongoose.model('Comments', commentSchema)

module.exports = Comments