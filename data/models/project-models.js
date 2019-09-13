const db = require('../db-config')

module.exports = {
    find,
    findById,
    add
}

function find(){
    return db('project')
    .then(projects => {
        return projects.map( project => {
            if(project.completed === 0){
                project.completed = false
            }else{
                project.completed = true
            }
            return project
    })
})
}

function findById(id){
    return db('project')
    .where({id: id})
    .then(project => {
        if(project.completed === 0){
            project.completed = false
        }else{
            project.completed = true
        }
        return project
    })
}

function add(projectVal){
    return db('project')
    .insert(projectVal)
    .then(([id]) => findById(id))
}