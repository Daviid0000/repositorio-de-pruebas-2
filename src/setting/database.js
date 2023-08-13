const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(
    'database', 
    'root', 
    'root', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  module.exports = { sequelize, DataTypes }