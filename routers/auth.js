const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const ensureloggin = require('../middlewares/ensure_login');
router.use(ensureloggin);
router.use(function(req,res,next){
    const user = req.user;
    res.locals.title = user.Name;
    next();
});

//profile
router.get('/', asyncHandler(async function(req, res) {
    const user = req.user;
    res.locals.title = user.Name;
    res.render('user/profile');
}));


router.post('/',asyncHandler(async function(req, res) {
    const { name ,tel} = req.body;
    const user = req.user;
    if(name){
        user.Name = name;
    }
    if(tel){
        user.Tel = tel;
    }
    await user.save();
    res.redirect('profile');
}));

//logout
router.get('/logout',function(req,res){
    delete req.session.UserId ;
    res.redirect('/GUB/home');
});
module.exports = router;