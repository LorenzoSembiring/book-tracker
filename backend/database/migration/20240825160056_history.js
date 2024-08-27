/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("histories", function (table) {
    table.increments("id").unique().primary();
    table.integer('user_id').unsigned().index().references('id').inTable('users');
    table.integer('user_book_id').unsigned().index().references('id').inTable('user_books');
    table.bigInteger("counter").notNullable();
    table.string("status").notNullable();
    table.string("note").notNullable();
    table.datetime("date").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
