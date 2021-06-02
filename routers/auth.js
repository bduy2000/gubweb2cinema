const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const brcypt = require('bcrypt');
const Movie = require('../models/movie');
const Theater = require('../models/theater');
const Cinema = require('../models/cinema');
const ShowTime = require('../models/showtime');
const Booking = require('../models/booking');
const Ticket = require('../models/ticket');
const User = require('../models/user');
const ensureloggin = require('../middlewares/ensure_login');
const user = require('../middlewares/user');
router.use(ensureloggin);
router.use(function(req,res,next){
    const user = req.user;
    res.locals.title = user.Name;
    next();
});


router.post('/',asyncHandler(async function(req, res) {
    const { name ,tel,oldpassword,newpassword,confirmpassword} = req.body;
    const user = req.user;
    if(name){
        user.Name = name;
    }
    if(tel){
        user.Tel = tel;
    }
    if(oldpassword && newpassword && confirmpassword ){
        if(brcypt.compareSync(oldpassword,user.Password)){
            if(newpassword == confirmpassword){
                const hash = brcypt.hashSync(newpassword,10);
                user.Password = hash;
                user.save();
            }else{
                res.send('new password != confirm password');
            }
        }else{
            res.send('your old password is not conrrect');
        }
    }
    await user.save();
    res.redirect('/GUB/home');
}));


router.get('/history',asyncHandler(async function(req, res) {
    const user = req.user;
    const historys = await User.findOne({ include: { all: true, nested: true },where:{id: user.id}});
    const cinemas = await Cinema.findAll();
    res.render('gubcinema/home/donhangcuatoi',{historys,cinemas})
}));

//logout
router.get('/logout',function(req,res){
    delete req.session.UserId ;
    res.redirect('/GUB/home');
});
module.exports = router;