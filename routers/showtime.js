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
    res.render('showtime/addshowtime', { movies, theaters });
}));


router.post('/showtime/add', asyncHandler(async function (req, res) {
    const { MovieId, TheaterId, timebegin, price ,dateshow} = req.body;
    
    const movie = await Movie.findByPk(MovieId);
   
        const end =  moment(timebegin,'hh:mm').add(movie.Time, 'minutes').format('hh:mm');
        console.log(end);
        const newshowtime = await ShowTime.create({ TimeBegin: timebegin, MovieId: MovieId, TheaterId: TheaterId, TimeFinish: end, Price: price, DateShow: dateshow });
        if (newshowtime) {
            res.redirect('/showtime');
        } else {
            res.send('error');
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
        res.send('error');
    }
}));
//delete
router.post('/showtime/update/:id', asyncHandler(async function (req, res) {
    const id = req.params.id;
    const showtime = await Theater.findByPk(id);
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
        res.redirect('/showtime');
    } else {
        res.send('error');
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
        res.send('error');
    }
}));


module.exports = router;