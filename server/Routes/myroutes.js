const express = require('express')

const router = express.Router()

router.get('/' , (req , res)=>{
    res.send("welcome to expree js")
})

router.get('/about' , (req , res)=>{
    res.send("welcome to About page")
})

module.exports = router;