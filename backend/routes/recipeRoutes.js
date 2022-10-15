const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.status(200).json( {message: 'Get recipes'} )
})

router.post('/', (req,res)=>{
    res.status(200).json( {message: 'Set favorite'} )
})

router.put('/:id', (req,res)=>{
    res.status(200).json( {message: `Update favorite ${req.params.id}`} )
})

router.delete('/:id', (req,res)=>{
    res.status(200).json( {message: `Delete favorite ${req.params.id}`} )
})

module.exports = router