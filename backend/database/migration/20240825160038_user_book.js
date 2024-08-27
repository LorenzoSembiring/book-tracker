/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user_books", function (table) {
        table.increments('id').unsigned().unique();
        table.string('book_ISBN').references('ISBN').inTable('books');
        table.integer('user_id').unsigned().index().references('id').inTable('users');
        table.string('type').notNullable();
        table.enu('count_type', ['percentage', 'page', 'time'])
        table.string('description').notNullable();
        table.string('status').notNullable();
        table.smallint('star').notNullable();
        table.string('comment').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
