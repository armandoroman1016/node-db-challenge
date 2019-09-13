
exports.seed = function(knex) {
      return knex('task').insert([
        {project_id: 1, description: 'Clone Repo', notes: '', completed: false},
        {project_id: 1, description: 'Meet with client', notes: 'make unnecessary changes to project', completed: false},
        {project_id: 1, description: 'Debug', notes: 'comment your code', completed: false},
        {project_id: 2, description: 'Nap', notes: 'much deserved', completed: false},
        {project_id: 2, description: 'meet with ux designer', notes: 'cool dude', completed: false},
        {project_id: 2, description: 'drink coffee', notes: 'much needed', completed: false},
        {project_id: 3, description: 'Delete Repo', notes: '', completed: false},
        {project_id: 3, description: 'testing', notes: 'testing', completed: false},
        {project_id: 3, description: 'Debug', notes: 'comment your code', completed: false},
      ]);
};
