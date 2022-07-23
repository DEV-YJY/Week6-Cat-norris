const express = require('express')
const request = require('superagent')

const dotenv = require('dotenv')
dotenv.config()

const apiKey = process.env.THECATAPI_API_KEY

const router = express.Router()

//Get localhost:3000/api/v1/cats
router.get('/', (req, res) => {
  request
    .get('https://api.thecatapi.com/v1/images/search')
    .set('Authorization', 'x-api-key' + apiKey)
    .then((cat) => res.json(JSON.parse(cat.text)))
    .catch((err) => {
      res.status(500).send(err.message)
    })
})
// [
// 	{
// 		"breeds": [],
// 		"id": "e3a",
// 		"url": "https://cdn2.thecatapi.com/images/e3a.jpg",
// 		"width": 600,
// 		"height": 800
// 	}
// ]
module.exports = router
