const { Sequelize, DataTypes, Model ,Op} = require('sequelize');
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

Ticket.checkRegalSeat = async function(seats,showtime){
  
  for(let j = 0 ; j < seats.length; j++){
const check = await Ticket.findOne({include:[{model: Booking,include:[{model: ShowTime,where:{id: showtime}}]}],where:{RegalSeat: seats[j]}})
if(check){
  return 1;
}  
}
return 0;
  
}


module.exports = Ticket;