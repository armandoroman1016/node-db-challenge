const db = require('../db-config')

module.exports = {
    find,
    findById,
    add
}

function find(){
    return db('resource')
    .then(resources =>  resources)
}


function findById(id){
    return db('resource')
    .where({id: id})
    .then(resource => resource)
}


function add(resourceVal){
    return db('resource')
    .insert(resourceVal)
    .then(([id]) => findById(id))
}