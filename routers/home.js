const User = require('../models/user');
const Movie = require('../models/movie');
const Cinema = require('../models/cinema');
const Theater = require('../models/theater');
const ShowTimes = require('../models/showtime');
const asyncHandler = require('express-async-handler');
const express = require('express');

const router = express.Router();


router.use(function(req,res,next){
    res.locals.title = 'Home';
    next();
})

router.get('/movie/picture/:id', asyncHandler( async function(req,res){
    const movie = await Movie.findByPk(req.params.id);
    if(!movie || !movie.Poster){
        res.status(404).send('File not fould');
    }else{
        res.header('Content-Type','image/jpeg').send(movie.Poster);
    }
     }));

router.get('/home',asyncHandler (async function(req,res){
    const user = req.user;
    const nowplayings = await Movie.findAll({where:{ Category: 'nowplaying'}});
    const comingsoons = await Movie.findAll({where:{ Category: 'comingsoon'}});
    const hots = await Movie.findAll({where:{ Category: 'hot'}});
    const cinemas = await Cinema.findAll();
    if(user && user.Category == 'admin'){
        res.redirect('/GUB/admin');
    }else{
        res.render('gubcinema/home/home',{nowplayings,comingsoons,hots,cinemas});
    }
}));


router.get('/admin',function(req,res){
    res.locals.title = 'Admin';
    res.render('adminpage');
    });


    
router.get('/send',asyncHandler (async function(req,res){
    const {code,userid}= req.query;
    
    const user = await User.ResetCode(code,userid);
    req.session.UserId = userid;
    if(user.Category == 'admin'){
        res.redirect('/GUB/admin');
    }else{
        res.redirect('/GUB/home');
    }
   
}));

router.get('/khuyenmai',asyncHandler (async function(req,res){
    res.locals.title = 'Khuyen mai';
    const cinemas = await Cinema.findAll();
    const nowplayings = await Movie.findAll({where:{ Category: 'nowplaying'}});
    res.render('gubcinema/home/khuyenmai',{nowplayings,cinemas});
    }));
    router.get('/rapvagia',asyncHandler (async function(req,res){
        res.locals.title = 'Rapvagia';
        const cinemas = await Cinema.findAll();
    res.render('gubcinema/home/rapvagia',{cinemas});
    }));

router.get('/gioithieu',asyncHandler (async function(req,res){
    res.locals.title = 'GioiThieu';
    const cinemas = await Cinema.findAll();
    const nowplayings = await Movie.findAll({where:{ Category: 'nowplaying'}});
res.render('gubcinema/home/gioithieu',{nowplayings,cinemas});
}));

router.get('/lichchieuchitiet/:id/:date',asyncHandler (async function(req,res){
    res.locals.title = 'Lich chieu';
    const {id,date} = req.params;
    const movies = await Movie.findAll({include:[{model:ShowTimes,where:{DateShow: date},include:[{model:Theater,where:{CinemaId: id}}]}]});
   const cinemas = await Cinema.findAll();
    res.render('gubcinema/home/lichchieuchitiet',{cinemas,movies,id,date});
    
}));

router.get('/datve/:movieid/:cinemaid/:date',asyncHandler (async function(req,res){
    res.locals.title = 'Lich chieu';
    const {movieid,cinemaid,date} = req.params;
    const movie = await Movie.findOne({where:{id: movieid},include:[{model:ShowTimes,where:{DateShow: date},include:[{model:Theater,where:{CinemaId: cinemaid}}]}]});
   const cinemas = await Cinema.findAll();
   const thiscinema = await Cinema.findByPk(cinemaid);
    res.render('gubcinema/home/lichchieuchitietphim',{cinemas,movie,movieid,cinemaid,date,thiscinema});
    
}));



router.get('/lichchieu',asyncHandler (async function(req,res){
    res.locals.title = 'Lich chieu';
    const cinemas = await Cinema.findAll();
    res.render('gubcinema/home/lichchieu',{cinemas});
}));

module.exports = router;// do router cung la 1 cai module nen can export no ra