const { Sequelize, DataTypes, Model } = require('sequelize');
module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5432/gub'); // Example for postgres