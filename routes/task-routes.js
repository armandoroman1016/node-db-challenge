const router = require('express').Router()
const db = require('../data/models/task-models')

router.get('/:id', (req, res) => {
    const { id } = req.params
    db.find(id)
    .then(tasks => res.status(200).json(tasks))
    .catch( err => res.status(500).json({message: 'Unknown error'}))
})

router.post('/', (req, res) => {
    const { body } = req
    db.add(body)
    .then(task => res.status(200).json(task))
    .catch( err => res.status(500).json({message: 'Unknown error'}))
})


module.exports = router;