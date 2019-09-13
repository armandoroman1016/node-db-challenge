const router = require('express').Router()
const db = require('../data/models/resource-model')

router.get('/', (req, res) => {
    db.find()
    .then(resources => res.status(200).json(resources))
    .catch( err => res.status(500).json({message: 'Unknown error'}))
})

router.post('/', (req, res) => {
    let resource = req.body
    if(!resource.name){
        res.status(400).json({message:'please include the name of your resource'})
    }else{
        db.add(resource)
        .then(resource => res.status(201).json(resource))
        .catch( err => res.status(500).json({message: 'Unknown error'}))
    }
})

module.exports = router;