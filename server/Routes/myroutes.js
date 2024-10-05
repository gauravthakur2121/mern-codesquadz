const express = require('express')
const router = express.Router()
const HomeController=require('../controllers/home')



router.get('/alldata',HomeController.home)
router.post('/newdata',HomeController.addData)



module.exports = router;