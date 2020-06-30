const express = require('express');
const router = express.Router()

router.post('/', (req,res)=>{
    console.log('baja');
    res.send('baja');
})

module.exports = router;