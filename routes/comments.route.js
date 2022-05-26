const { Router } = require("express");
const { commentController } = require("../controllers/comment.controller");
const router = Router();

router.post('/comments', commentController.postComment)
router.delete('/comments/:id',commentController.deleteComment)
router.get('/comments/:id',commentController.getComment)



module.exports = router