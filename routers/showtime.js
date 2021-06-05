const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const Theater = require('../models/theater');
const ShowTime = require('../models/showtime');
const ensureadmin = require('../middlewares/ensure_admin');
const Cinema = require('../models/cinema');
const moment = require('moment');

router.use(ensureadmin);
router.use(function (req, res, next) {
    res.locals.title = 'Showtime';
    res.locals.link = '/GUB/admin';
    next();
})
//create
router.get('/showtime', asyncHandler(async function (req, res) {
    const showtimes = await ShowTime.findAll({ include: [{ model: Theater }, { model: Movie }] });
    res.render('showtime/showtime', { showtimes });
}));

router.get('/showtime/add', asyncHandler(async function (req, res) {
    const theaters = await Theater.findAll({include:Cinema});
    const movies = await Movie.findAll();
    if(req.session.check){
        res.locals.check = 'true';
    }else{
        res.locals.check = null;
    }
    res.render('showtime/addshowtime', { movies, theaters });
}));


router.post('/showtime/add', asyncHandler(async function (req, res) {
    const { MovieId, TheaterId, timebegin, price ,dateshow,check} = req.body;
    
    const movie = await Movie.findByPk(MovieId);
   
        const end =  moment(timebegin,'hh:mm').add(movie.Time, 'minutes').format('hh:mm');
      if(MovieId && TheaterId){
        const newshowtime = await ShowTime.create({ TimeBegin: timebegin, MovieId: MovieId, TheaterId: TheaterId, TimeFinish: end, Price: price, DateShow: dateshow });
        if (newshowtime) {
            if(check){
                req.session.check = 'true';
                res.redirect('/showtime/add');
            }else{
                delete req.session.check ;
            res.redirect('/showtime');
            }
        } else {
            res.locals.title = 'Error';
    const error = "Add showtime is not sucessfully";
    res.render('alerts/alerts',{error});
        }
    }else{
        res.locals.title = 'Error';
    const error = "Movie or Theater was not found ";
    res.render('alerts/alerts',{error});
    }
    
}));

//delete
router.get('/showtime/update/:id', asyncHandler(async function (req, res) {
    const id = req.params.id;
    const showtime = await ShowTime.findByPk(id);
    if (showtime) {
        const theaters = await Theater.findAll({include:Cinema});
    const movies = await Movie.findAll();
        res.render('showtime/updateshowtime',{showtime,theaters,movies})
    } else {
        res.locals.title = 'Error';
    const error = "This showtime was not found";
    res.render('alerts/alerts',{error});
    }
}));
//delete
router.post('/showtime/update/:id', asyncHandler(async function (req, res) {
    const id = req.params.id;
    const showtime = await ShowTime.findByPk(id);
    if (showtime) {
        const { MovieId, TheaterId, timebegin, price, dateshow } = req.body;
        const movie = await Movie.findByPk(MovieId);
        if( timebegin){
        const end =  moment(timebegin,'hh:mm').add(movie.Time, 'minutes').format('hh:mm');
        showtime.TimeBegin = timebegin;
        showtime.TimeFinish = end;
    }
        showtime.MovieId = MovieId;
        showtime.TheaterId = TheaterId;
        if(price){
            showtime.Price = price;
        }
        if(dateshow){
            showtime.DateShow = dateshow;
        }
        await showtime.save();
        res.redirect('/showtime');
    } else {
        res.locals.title = 'Error';
    const error = "This showtime was not found";
    res.render('alerts/alerts',{error});
    }
}));

//delete
router.get('/showtime/delete/:id', asyncHandler(async function (req, res) {
    const id = req.params.id;
    const showtime = await ShowTime.findByPk(id);
    if (showtime) {
        await showtime.destroy();
        res.redirect('/showtime');
    } else {
        res.locals.title = 'Error';
    const error = "This showtime was not found";
    res.render('alerts/alerts',{error});
    }
}));


module.exports = router;