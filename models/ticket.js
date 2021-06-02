const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./db');

const Movie = require('./movie');
const ShowTime = require('./showtime');
const Booking = require('./booking');
const Ticket = db.define('Ticket', {
  
    RegalSeat: {
        type: DataTypes.STRING,
      }, 
    Price:{
        type: DataTypes.INTEGER,
      },
    
  });

    // 1 todo chi co 1 user con 1 user co nhiu todo
Ticket.belongsTo(Booking);
Booking.hasMany(Ticket,{onDelete: 'cascade', hooks:true});

Ticket.getStatic = async function(from,to){
  return await Movie.findAll({include:[{model: ShowTime,include:[{model:Booking,include:Ticket,where:{DateTime:{[between]:[from,to]}}}]}]});
}


module.exports = Ticket;