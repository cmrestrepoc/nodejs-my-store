const express = require('express')
const routerApi = require('./routes')
const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomErrorHandler
} = require('./middlewares/error.handler')

const app = express()
const port = 3000

app.use(express.json())

const whitelist = ['http://localhost:8080', 'http://myapp.co']
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Origin not allowed'))
    }
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hello, this is the store in express')
})

app.get('/new-route', (req, res) => {
  res.send('Hello, this is a new route')
})

routerApi(app)

app.use(logErrors) // midlerwares must go after the router
app.use(boomErrorHandler)
app.use(errorHandler) // They are executed sequentially following next func execution

app.listen(port, () => console.log('listening to port', port))
