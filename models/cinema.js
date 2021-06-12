const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./db');


const Cinema = db.define('Cinema', {
  
    Name: {
        type: DataTypes.STRING,
      }, 
    Address:{
      type: DataTypes.TEXT,
      },
    Picture:{
      type: DataTypes.BLOB,
      allowNull: true
    },
    Map:{
      type: DataTypes.TEXT,
      allowNull: true
    }
  },{timestamps: false});
  module.exports = Cinema;