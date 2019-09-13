const db = require('../db-config')

module.exports = {
    find,
    add
}

function find(id){
    return db('task as t')
    .where('t.project_id', id)
    .join('project_resources as pr')
    .on('pr.project_id', id)
    .join('project as p')
    .on('p.id', id)
    .select('p.id as project_id', 'p.name as project_name', 'p.description as project_description' ,'t.id as task_id', 't.description as task_description', 't.notes as task_notes', 't.completed')
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