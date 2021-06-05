const User = require('../models/user');
const Movie = require('../models/movie');
const Cinema = require('../models/cinema');
const Theater = require('../models/theater');
const ShowTime = require('../models/showtime');
const Booking = require('../models/booking');
const Ticket = require('../models/ticket');

const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const ensurelogin = require('../middlewares/ensure_login');
router.use(ensurelogin);

router.use(function(req,res,next){
    res.locals.title = 'Datve';
    res.locals.link = '/GUB/home';
    next();
})
router.get('/getticket/:showtimeid',asyncHandler (async function(req,res){
    const {showtimeid} = req.params;
    const showtime = await ShowTime.findByPk(showtimeid);
    const theater = await Theater.findByPk(showtime.TheaterId);
    const seats = await Ticket.findAll({include:{model: Booking,include:{model: ShowTime ,where:{id:showtimeid}} }});
    const check = [];
    seats.forEach(async (seat) => {
        check.push(seat.RegalSeat);
    });
    
    const width = theater.Width;
    const temp = theater.Height
    const height = temp.charCodeAt();
   
    
    res.render('booking',{width,height,showtime,check});
}));
router.post('/getticket/:showtimeid',asyncHandler (async function(req,res){
 const{seat} = req.body;
 const {showtimeid} = req.params;
 const showtime = await ShowTime.findOne({include:[{model: Theater,include: Cinema},{model: Movie}],where:{id:showtimeid}});

 const user = req.user;
 const seats = seat.split(",");
 const count = seats.length;
 const money = count*showtime.Price; 
 const d = new Date();
 const check = await Ticket.checkRegalSeat(seats,showtimeid);
 console.log(check);
 if(check == 0){
    const newbook = await Booking.create({TotalPrice: money,DateTime: d,ShowTimeId: showtimeid,UserId: user.id});
    if(newbook){
    for(let i = 0 ; i < seats.length ; i++){
    await Ticket.create({RegalSeat: seats[i],Price: showtime.Price,BookingId:newbook.id});
    }
    const pay = await newbook.getTickets();
    res.locals.title = 'Hoadon';
    res.render('pay',{pay,showtime})
    }else{
    res.locals.title = 'Error';
    const error = "Can not get ticket";
    res.render('alerts/alerts',{error});
    }   
 }else{
    res.locals.title = 'Error';
    const error = "This seats was chosen";
    res.render('alerts/alerts',{error});
 }
 
}));
module.exports = router;// do router cung la 1 cai module nen can export no ra