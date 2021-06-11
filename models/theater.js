const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./db');
const Cinema = require('./cinema');

const Theater = db.define('Theater', {
  
    Name: {
        type: DataTypes.STRING,
      }, 
    
    Category:{
        type: DataTypes.STRING,
      },
    Width:{
        type: DataTypes.INTEGER,
    },
    Height:{
        type: DataTypes.STRING,
    },
    
  },{timestamps: false});

  // 1 todo chi co 1 user con 1 user co nhiu todo
Theater.belongsTo(Cinema);
Cinema.hasMany(Theater,{onDelete: 'cascade', hooks:true});

module.exports = Theater;