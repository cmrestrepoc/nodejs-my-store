const express = require('express')
const routerApi = require('./routes')

const app = express()
const port = 7001

app.get('/', (req, res) => {
  res.send('Hello, this is the store in express')
})

app.get('/new-route', (req, res) => {
  res.send('Hello, this is a new route')
})

routerApi(app)

app.listen(port, () => console.log('listening to port', port))
