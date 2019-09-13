
exports.up = function(knex) {
  return knex.schema
    .createTable('resource', (tbl) =>{
        tbl.increments();
        tbl.string('name', 128).notNullable().unique()
        tbl.text('description');
    })
    .createTable('task', (tbl) => {
        tbl.increments();
        tbl.text('description').notNullable();
        tbl.text('notes',255);
        tbl.boolean('completed')
    })
    .createTable('project'), (tbl) => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.text('description');
        tbl.boolean('completed');
        tbl
            .integer('task_id')
            .unsigned()
            .references('id')
            .inTable('task')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resource')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    }
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
};
