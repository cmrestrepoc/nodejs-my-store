const express = require('express')
const ProductsService = require('../services/products.services')

const router = express.Router()
const service = new ProductsService

router.get('/', (req, res) => {
  const products = service.find()
  res.json(products)
})

/* This endpoint needs to be before the dynamic one */
router.get('/filter', (req, res) => {
  res.json('I am a filter')
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.post('/', (req, res) => {
  const body = req.body
  const newProduct = service.create(body)
  res.status(201).json(newProduct)
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const product = service.update(id, body)
  res.json(product)
})

router.patch('/:id', (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = service.update(id, body)
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const rta = service.delete(id)
  res.json(rta)
})

module.exports = router
