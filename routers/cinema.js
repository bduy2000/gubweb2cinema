const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const Cinema = require('../models/cinema');
const ensureadmin = require('../middlewares/ensure_admin');
router.use(ensureadmin);
router.use(function(req,res,next){
    res.locals.title = 'Cinema';
    res.locals.link = '/GUB/admin'
    next();
})

//create
router.get('/cinema',asyncHandler (async function(req,res){
    const cinemas = await Cinema.findAll();
    res.render('cinema/cinema',{cinemas});
    }));

    router.get('/cinema/add',asyncHandler (async function(req,res){
        if(req.session.check){
            res.locals.check = 'true';
        }else{
            res.locals.check = null;
        }
        res.render('cinema/addcinema');
        }));

router.post('/cinema/add',asyncHandler (async function(req,res){
    const {name,address,check} = req.body;
    const max = await Cinema.max('id');
    const id = max + 1;
    const cinema = await Cinema.create({id,Name: name,Address:address});
    if(cinema){
        if(check){
            req.session.check = 'true';
            res.redirect('/cinema/add');
        }else{
            delete req.session.check ;
            res.redirect('/cinema');
        }
        
    }else{
        const error = "Add cinema unsucessfully";
        res.locals.title = 'Error';
        res.render('alerts/alerts',{error});
    }
}));
//update
router.get('/cinema/update/:id',asyncHandler (async function(req,res){
    const id = req.params.id;
    const cinema = await Cinema.findByPk(id);
    if(cinema){
    res.render('cinema/updatecinema',{cinema});
    }else{
        const error = "This cinema is not found";
        res.locals.title = 'Error';
        res.render('alerts/alerts',{error});
    }
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
        const error = "This cinema is not found";
        res.locals.title = 'Error';
        res.render('alerts/alerts',{error});
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
        const error = "This cinema is not found";
        res.locals.title = 'Error';
                res.render('alerts/alerts',{error});
    }
}));
module.exports = router;
