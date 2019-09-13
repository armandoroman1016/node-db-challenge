const db = require('../db-config')

module.exports = {
    find,
    add
}

function find(id){
    return db('task as t')
    .select(['t.id as task_id', 't.description as task_description', 't.notes as task_notes', 't.completed','p.name as project_name','p.description as project_description'])
    .join('project as p', 'p.id', 't.project_id')
    .where({project_id: id})
    .then(tasks => tasks)
}

function findById(id){
    return db('task')
    .where({id: id})
    .then(task => {
        if(task.completed === 0){
            task.completed = false
        }else{
            task.completed = true
        }
        return task
    })
}

function add(taskVal){
    return db('task')
    .insert(taskVal)
    .then(([id]) => findById(id))
}