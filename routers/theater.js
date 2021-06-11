const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const Theater = require('../models/theater');
const Cinema = require('../models/cinema');
const ensureadmin = require('../middlewares/ensure_admin');
router.use(ensureadmin);
router.use(function(req,res,next){
    res.locals.title = 'Theater';
    res.locals.link = '/GUB/admin';
    next();
})
//create
router.get('/theater',asyncHandler (async function(req,res){
    const cinemas = await Cinema.findAll();
    const theaters = await Theater.findAll({include: Cinema});
    res.render('theater/theater',{cinemas,theaters});
}));

router.get('/theater/add',asyncHandler (async function(req,res){
    if(req.session.check){
        res.locals.check = 'true';
    }else{
        res.locals.check = null;
    }
    const cinemas = await Cinema.findAll();
    res.render('theater/addtheater',{cinemas});
}));
    

router.post('/theater/add',asyncHandler (async function(req,res){
    const {name,width,height,category,CinemaId,check} = req.body;
    const cinema = await Cinema.findByPk(CinemaId);
    if(cinema){
        const max = await Theater.max('id');
        const id = max + 1;
        const theater = await cinema.createTheater({id,Name: name,Width: width , Height: height, Category: category });
        if(theater){
            if(check){
                req.session.check = 'true';

                res.redirect('/theater/add');
            }else{
                delete req.session.check ;
            res.redirect('/theater');    
            }
            
        }else{
            res.locals.title = 'Error';
    const error = "Add theater unsucessfully";
    res.render('alerts/alerts',{error});
        }
    }else{
        res.locals.title = 'Error';
    const error = "This cinema was not found";
    res.render('alerts/alerts',{error});
    }
}));

//update
router.get('/theater/update/:id',asyncHandler (async function(req,res){
    const id = req.params.id;
    const theater = await Theater.findByPk(id);
    const cinemas = await Cinema.findAll();
    if(theater){
    res.render('theater/updatetheater',{theater,cinemas});
    }else{
        res.locals.title = 'Error';
    const error = "This theater was not found";
    res.render('alerts/alerts',{error});
    }
    }));

router.post('/theater/update/:id',asyncHandler (async function(req,res){
    const id = req.params.id;
    const {name,width,height,category,CinemaId} = req.body;
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
        res.locals.title = 'Error';
    const error = "This theater was not found";
    res.render('alerts/alerts',{error});
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
        res.locals.title = 'Error';
    const error = "This theater was not found";
    res.render('alerts/alerts',{error});
    }
}));

module.exports = router;

