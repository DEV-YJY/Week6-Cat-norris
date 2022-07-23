const express = require('express')
const request = require('superagent')

const router = express.Router()

//Get localhost:3000/api/v1/norris
router.get('/', (req, res) => {
  request
    .get('https://api.chucknorris.io/jokes/random')
    .then((response) => res.json(JSON.parse(response.text)))
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
