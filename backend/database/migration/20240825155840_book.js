/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('books', function (table) {
    table.string('ISBN').unique().primary();
    table.string('title').notNullable();
    table.string('publisher').notNullable();
    table.string('author').notNullable();
    table.string('description').notNullable();
    table.string('genre').notNullable();
    table.string('cover').nullable();
    table.integer('page').notNullable();
    table.integer('year').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
