const express = require('express')
const router = express.Router()

const UserController=require('../controllers/users')



router.post("/registoruser",UserController.registerUser)


module.exports = router;