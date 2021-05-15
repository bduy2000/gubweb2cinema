const Movie = require('../models/movie');
const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();

router.use(function(req,res,next){
    res.locals.title = 'Home';
    next();
})

router.get('/nowplaying',function(req,res){

        res.render('gubcinema/home/phimdangchieu');
        });

router.get('/iscoming',function(req,res){

            res.render('gubcinema/home/phimsapchieu');
            });
    



    

module.exports = router;// do router cung la 1 cai module nen can export no ra