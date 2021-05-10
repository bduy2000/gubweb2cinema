const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const Theater = require('../models/theater');
const Cinema = require('../models/cinema');
router.use(function(req,res,next){
    res.locals.title = 'Theater';
    next();
})
//create
router.get('/theater',asyncHandler (async function(req,res){
    const cinemas = await Cinema.findAll();
    if(req.session.cinemaid){
        const id = req.session.cinemaid;
        const theaters = await Theater.findAll({include: Cinema,where:{CinemaId: id}});
        res.render('theater/theater',{cinemas,theaters});
    }else{
        const theaters = await Theater.findAll({include: Cinema});
        res.render('theater/theater',{cinemas,theaters});
    }
    
    }));
    
    

router.post('/theater/create',asyncHandler (async function(req,res){
    const {name,width,height,category,CinemaId} = req.body;
    const cinema = await Cinema.findByPk(CinemaId);
    if(cinema){
        const theater = await cinema.createTheater({Name: name,Width: width , Height: height, Category: category });
        if(theater){
            req.session.cinemaid = cinema.id;
            res.redirect('/theater');
        }else{
            res.send('error');
        }
    }else{
        res.send('error');
    }
}));
router.post('/theater/search',asyncHandler (async function(req,res){
        const {CinemaId} = req.body;
        req.session.cinemaid = CinemaId;
        res.redirect('/theater');
    }));
//update
router.get('/theater/update/:id',asyncHandler (async function(req,res){
    const id = req.params.id;
    const theater = await Theater.findByPk(id);
    const cinemas = await Cinema.findAll();
    res.locals.title = theater.Name;
    res.render('theater/updatetheater',{theater,cinemas});
    }));

router.post('/theater/update/:id',asyncHandler (async function(req,res){
    const id = req.params.id;
    const {name,address,width,height,category,CinemaId} = req.body;
    const theater = await Theater.findByPk(id);
    if(theater){
        if(name){
            theater.Name = name;
        }
        theater.Width = width;
        theater.Height = height;
        theater.Category = category;
        theater.CinemaId = CinemaId;
        await theater.save();
        res.redirect('/theater');
    }else{
        res.send('error');
    }
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

