const User = require('../models/user');
const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();

router.use(function(req,res,next){
    res.locals.title = 'Home';
    next();
})

router.get('/home',function(req,res){
res.render('gubcinema/home/home');
});


router.get('/admin',function(req,res){
    res.locals.title = 'Admin';
    res.render('adminpage');
    });


    
router.get('/send',asyncHandler (async function(req,res){
    const {code,userid}= req.query;
    User.ResetCode(userid);
    req.session.UserId = userid;
    res.redirect('/GUB/home');
}));

module.exports = router;// do router cung la 1 cai module nen can export no ra