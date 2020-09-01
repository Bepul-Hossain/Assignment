const express = require('express')
const Controller = require('../controllers/controller.js')
const router = express.Router()

router.post('/insertrouter',Controller.create)
router.get('/getallrouter',Controller.getall)


module.exports = router