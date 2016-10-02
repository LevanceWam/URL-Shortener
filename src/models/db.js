const Sequelize = require('sequelize');

if (!process.env.DB_HOST) {
  require('dotenv').config({ silent: true });
}
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// This is what creates my table for recipes and all of the properties
// Double check your datatypes
const recipe = sequelize.define('recipe', {
  name: {
    type: Sequelize.STRING,
  },
  originalLink: {
    type: Sequelize.STRING,
  },
  newLink: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  },
});

sequelize.sync();

exports.sequelize = sequelize;
exports.recipes = recipe;
