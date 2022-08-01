const db = require('../models')

// models
const Product = db.products
const Review = db.reviews

// CREATE PRODUCT
const addProduct = async(req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
    }
    const product = await Product.create(info)
    res.status(200).send({ 'msg': 'Product successfully added to the db', 'product': product })
}

// GET ALL PRODUCTS
const getAllProduct = async(req, res) => {
    let products = await Product.findAll({})
    res.send(products)
}

// GET PUBLISHED PRODUCTS
const getPublishedProduct = async(req, res) => {
    let products = await Product.findAll({ where: { published: true } })
    res.send(products)
}

// GET ONE PRODUCT
const getOneProduct = async(req, res) => {
    let id = req.params.id
    let product = await Product.findOne({ where: { id: id } })
    if (product) {
        return res.send(product)
    }
    res.status(404).send({ 'msg': `Product with id ${id} is not found` })


}

// UPDATE PRODUCT
const updateProduct = async(req, res) => {
    let id = req.params.id
    let product = await Product.update(req.body, { where: { id: id } })
    res.status(200).send({ 'msg': 'Product updated successfully' })
}

// DELETE PRODUCT
const deleteProduct = async(req, res) => {
    let id = req.params.id
    let products = await Product.destroy({ where: { id: id } })
    res.status(200).send({ 'msg': 'Product deleted successfully' })
}

module.exports = {
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}