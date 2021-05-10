const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const Theater = require('../models/theater');
const ShowTime = require('../models/showtime');

//create
router.get('/showtime',asyncHandler (async function(req,res){
    const theaters = await Theater.findAll();
    const movies = await Movie.findAll();
    const showtimes = await ShowTime.findAll({include:[ {model: Theater},{model: Movie} ]});
    console.log(showtimes);
        res.render('showtime/showtime',{movies,theaters,showtimes});
    }));
    
    

router.post('/showtime/create',asyncHandler (async function(req,res){
    const {MovieId,TheaterId,timebegin,timefinish,price,dateshow} = req.body;
  
    const movie = await Movie.findByPk(MovieId);
    const theater = await Theater.findByPk(TheaterId);
    const showtime =await ShowTime.findOne({where:{MovieId:MovieId,TheaterId:TheaterId,TimeBegin:timebegin,DateShow:dateshow}});

    if(showtime){
        res.send('error');
    }else{
        const newshowtime = await ShowTime.create({TimeBegin:timebegin,MovieId:MovieId,TheaterId:TheaterId,TimeFinish:timefinish,Price:price,DateShow: dateshow});
        if(newshowtime){
            res.redirect('/showtime');
        }else{
            res.send('error');
        }
    }
}));
router.post('/theater/search',asyncHandler (async function(req,res){
        const {CinemaId} = req.body;
        req.session.cinemaid = CinemaId;
        res.redirect('/theater');
    }));


//delete
router.get('/theater/delete/:id',asyncHandler (async function(req,res){
    const id = req.params.id;
    const theater = await Theater.findByPk(id);
    if(theater){
        await theater.destroy();
        res.redirect('/theater');
    }else{
        res.send('error');
    }
}));


 module.exports = router;