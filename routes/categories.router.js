const express = require('express')

const router = express.Router()

router.get('/:idCategory/products/:idProduct', (req, res) => {
  const { idCategory, idProduct } = req.params
  res.json({
    idCategory,
    idProduct,
    name: 'Product 2',
    price: 2000
  })
})

module.exports = router
