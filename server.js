const express = require('express');
const projectRoutes = require('./routes/project-routes')
const resourceRoutes = require('./routes/resources-routes')
const server = express();

server.use(express.json())

server.use('/api/projects', projectRoutes)

server.use('/api/resources', resourceRoutes)

server.get('/', (req, res) => {
    res.status(200).json({message: 'Hello'})
})


module.exports = server
