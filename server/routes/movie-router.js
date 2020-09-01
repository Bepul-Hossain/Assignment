const express = require('express')
const MovieController = require('../controllers/movie-controller.js')
const router = express.Router()

router.post('/movierouter',MovieController.createMovie)
router.get('/getmovies',MovieController.getMovie)


module.exports = router