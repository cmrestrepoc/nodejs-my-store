const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, this is the store in express')
})

app.get('/new-route', (req, res) => {
  res.send('Hello, this is a new route')
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000
  })
})

app.get('/products/:id', (req, res) => {
  const {id} = req.params
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
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
