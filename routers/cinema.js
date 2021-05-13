const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const Cinema = require('../models/cinema');
const ensureadmin = require('../middlewares/ensure_admin');
router.use(ensureadmin);
router.use(function(req,res,next){
    res.locals.title = 'Cinema';
    next();
})

//create
router.get('/cinema',asyncHandler (async function(req,res){
    const cinemas = await Cinema.findAll();
    res.render('cinema/cinema',{cinemas});
    }));

    router.get('/cinema/add',asyncHandler (async function(req,res){
        res.render('cinema/addcinema');
        }));

router.post('/cinema/add',asyncHandler (async function(req,res){
    const {name,address} = req.body;

    const cinema = await Cinema.create({Name: name,Address:address});
    if(cinema){
        res.redirect('/cinema');
    }else{
        res.send('error');
    }
}));
//update
router.get('/cinema/update/:id',asyncHandler (async function(req,res){
    const id = req.params.id;
    const cinema = await Cinema.findByPk(id);
    res.locals.title = cinema.Name;
    res.render('cinema/updatecinema',{cinema});
    }));

router.post('/cinema/update/:id',asyncHandler (async function(req,res){
    const id = req.params.id;
    const {name,address} = req.body;
    const cinema = await Cinema.findByPk(id);
    if(cinema){
        if(name){
            cinema.Name = name;
        }
        if(address){
            cinema.Address = address;
        }
       
        await cinema.save();
        res.redirect('/cinema');
    }else{
        res.send('error');
    }
}));
//delete
router.get('/cinema/delete/:id',asyncHandler (async function(req,res){
    const id = req.params.id;
    const cinema = await Cinema.findByPk(id);
    if(cinema){
        await cinema.destroy();
        res.redirect('/cinema');
    }else{
        res.send('error');
    }
}));
module.exports = router;
