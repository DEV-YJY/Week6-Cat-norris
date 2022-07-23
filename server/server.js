const express = require('express')
const path = require('path')

const catsRoutes = require('./routes/cats')
const norrisRoutes = require('./routes/norris')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/cats', catsRoutes)
server.use('/api/v1/norris', norrisRoutes)
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})
module.exports = server
