const express = require('express')
const faker = require('faker')

const router = express.Router()

router.get('/products', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10
  for(let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products)
})

/* This endpoint needs to be before the dynamic one */
router.get('/products/filter', (req, res) => {
  res.json('I am a filter')
})

router.get('/products/:id', (req, res) => {
  const {id} = req.params
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
})
