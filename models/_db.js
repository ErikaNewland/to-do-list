const Sequelize = require('sequelize');
const db = new Sequelize('postgress://localhost:5432/todoList');

module.exports = db;