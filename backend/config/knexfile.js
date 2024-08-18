require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: process.env.DB_CONNECTION,
  connection: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./database/migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
};
