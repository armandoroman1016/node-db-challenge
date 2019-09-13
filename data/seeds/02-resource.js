
exports.seed = function(knex) {
      return knex('resource').insert([
        {name: 'some software', description: 'help do things faster'},
        {name: 'macbook pro', description: 'an overly expensive laptop computer'},
        {name: 'web developer', description: 'an advanced googler'},
        {name: 'other software', description: 'help do things faster'},
        {name: 'coffee', description: 'brain juice'}
      ]);
};
