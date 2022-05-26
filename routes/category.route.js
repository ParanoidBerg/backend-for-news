const { Router } = require("express");
const { categoryController } = require("../controllers/category.controller");
const router = Router();


router.get('/categories', categoryController.getCategory)
router.post('/categories', categoryController.postCategory)
router.delete('/categories/:id', categoryController.deleteCategory)

module.exports = router