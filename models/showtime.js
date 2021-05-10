const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./db');
const Theater = require('./theater');
const Movie = require('./movie');

const ShowTime = db.define('ShowTime', {
    TimeBegin: {
        type: DataTypes.TIME,
      }, 
    TimeFinish:{
        type: DataTypes.TIME,
      },
    Price:{
        type: DataTypes.INTEGER,
      },
    DateShow:{
      type: DataTypes.DATEONLY,
    }
    
  });

ShowTime.belongsTo(Movie);
ShowTime.belongsTo(Theater);

module.exports = ShowTime;

