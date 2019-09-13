
exports.seed = function(knex) {
      return knex('project').insert([
        {name: 'Project 1', description: 'rowValue1', completed: false},
        {name: 'Project 2', description: 'rowValue2', completed: false},
        {name: 'Project 3', description: 'rowValue3', completed: false},
      ]);
};
