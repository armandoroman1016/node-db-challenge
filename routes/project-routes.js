const router = require('express').Router()
const db = require('../data/models/project-models')

router.get('/', (req, res) => {
    db.find()
    .then(projects => res.status(200).json(projects))
    .catch( err => res.status(500).json({message: 'Unknown error'}))
})

router.post('/', (req, res) => {
    let project = req.body
    if(!project.name){
        res.status(400).json({message:'please include the nma eof your project'})
    }else{
        project.completed ? project.completed = 1 : project.completed = 0 
        db.add(project)
        .then(project => res.status(201).json(project))
        .catch( err => res.status(500).json({message: 'Unknown error'}))
    }
})

module.exports = router;