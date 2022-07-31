const productController = require('../controllers/productController')
const router = require('express').Router()

// ROUTES
router.post('/add', productController.addProduct)
router.get('/all', productController.getAllProduct)
router.post('/published', productController.getPublishedProduct)
router.get('/:id', productController.getOneProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router