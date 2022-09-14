const express = require('express')
const faker = require('faker')
const app = express()
const port = 7001

app.get('/', (req, res) => {
  res.send('Hello, this is the store in express')
})

app.get('/new-route', (req, res) => {
  res.send('Hello, this is a new route')
})

app.get('/products', (req, res) => {
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
app.get('/products/filter', (req, res) => {
  res.json('I am a filter')
})

app.get('/products/:id', (req, res) => {
  const {id} = req.params
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
})

app.get('/users/', (req, res) => {
  const {limit, offset} = req.query
  if(limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('There is no params')
  }
})

app.get('/categories/:idCategory/products/:idProduct', (req, res) => {
  const { idCategory, idProduct } = req.params
  res.json({
    idCategory,
    idProduct,
    name: 'Product 2',
    price: 2000
  })
})

app.listen(port, () => console.log('listening to port', port))
