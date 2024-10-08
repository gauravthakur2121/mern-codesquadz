const express = require("express")
const router = express.Router()

const logincontroller = require("../controllers/Login")

router.post('/loginuser' , logincontroller.Loginuser)

module.exports = router