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

router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = service.findOne(id)
  res.json(product)
})

router.post('/', (req, res) => {
  const body = req.body
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    message: 'updated',
    data: body,
    id
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    message: 'updated',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    message: 'deleted',
    id
  })
})

module.exports = router
