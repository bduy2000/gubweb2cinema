const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./db');


const Cinema = db.define('Cinema', {
  
    Name: {
        type: DataTypes.STRING,
      }, 
      Address:{
        type: DataTypes.TEXT,
      },
  });
  module.exports = Cinema;