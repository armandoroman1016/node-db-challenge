
exports.up = function (knex) {
    return knex.schema
        .createTable('resource', (tbl) => {
            tbl.increments();
            tbl.string('name', 128).notNullable().unique()
            tbl.text('description');
        })
        .createTable('project', (tbl) => {
            tbl.increments();
            tbl.string('name', 255).notNullable();
            tbl.text('description');
            tbl.boolean('completed');
        })
        .createTable('project_resources', (tbl) => {
            tbl.increments();
            tbl
                .integer('resource_id')
                .unsigned()
                .references('id')
                .inTable('resource')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('task', (tbl) => {
            tbl.increments();
            tbl.text('description').notNullable();
            tbl.text('notes', 255);
            tbl.boolean('completed')
            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('task')
        .dropTableIfExists('project')
        .dropTableIfExists('resource')
};
