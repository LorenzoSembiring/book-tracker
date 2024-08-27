/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").index().primary();
    table.string("username").notNullable();
    table.string("email");
    table.string("password");
    table.string("picture");
    table.enu("role", ["user", "admin"]);
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
