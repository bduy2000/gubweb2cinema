const Movie = require('../models/movie');
const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const Cinema = require('../models/cinema');

router.use(function(req,res,next){
    res.locals.title = 'Home';
    next();
})


router.get('/nowplaying',asyncHandler (async function(req,res){
    const nowplayings = await Movie.findAll({where:{ Category: 'nowplaying'}});
    const cinemas = await Cinema.findAll();
        res.render('gubcinema/home/phimdangchieu',{nowplayings,cinemas});
        }));


router.get('/hot',asyncHandler (async function(req,res){
            const hots = await Movie.findAll({where:{ Category: 'hot'}});
            const cinemas = await Cinema.findAll();
                res.render('gubcinema/home/hot',{hots,cinemas});
                }));

router.get('/comingsoon',asyncHandler (async function(req,res){
    const comingsoons = await Movie.findAll({where:{ Category: 'comingsoon'}});
    const cinemas = await Cinema.findAll();
            res.render('gubcinema/home/phimsapchieu',{comingsoons,cinemas});
            }));
    
            router.get('/:id',asyncHandler(async function(req,res){
                const movie = await Movie.findByPk(req.params.id);
                const cinemas = await Cinema.findAll();
                const hots = await Movie.findAll({where:{ Category: 'hot'}});
                res.render('gubcinema/home/moviedetail',{movie,cinemas,hots});
            }));


    

module.exports = router;// do router cung la 1 cai module nen can export no ra