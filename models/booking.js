const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./db');
const User = require('./user');
const ShowTime = require('./showtime');

const Booking = db.define('Booking', { 
  
        DateTime:{
        type: DataTypes.DATE,
        },
      TotalPrice: {
        type: DataTypes.INTEGER,
      }, 

  },{timestamps: false});

  Booking.belongsTo(ShowTime);
  ShowTime.hasMany(Booking,{onDelete: 'cascade', hooks:true});
  Booking.belongsTo(User);
  User.hasMany(Booking,{});
  

module.exports = Booking;
