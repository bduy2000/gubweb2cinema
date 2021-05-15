const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Email = require('../models/email');
const randomString = require('random-base64-string');
const brcypt = require('bcrypt');
router.use(function(req,res,next){
    res.locals.title = 'Log in';
    next();
})
//login
router.get('/login',function(req,res){
res.render('user/login');
});


router.post('/login',asyncHandler (async function(req,res){
    const {email,password} = req.body;
    const found = await User.findbyEmail(email)
        if(found && brcypt.compareSync(password,found.Password) && found.Code == null){
            req.session.UserId = found.id;
            if(found.Category == 'admin'){
                res.redirect('/GUB/admin');
            }else{
                res.redirect('/GUB/home');
            }
           
            }else{
                res.render('user/login');
            }
}));


router.post('/register',asyncHandler (async function(req,res){
    const {name,email,tel,password,confirmpassword,category} = req.body;
    const finduser = await User.findbyEmail(email);
     if(password != confirmpassword){
      res.send('Those passwords didn’t match. Try again');
     }else if(finduser){
         res.send('This account exist');
     }else{
     const code = randomString(4);
     const hash = brcypt.hashSync(password,10);
     const found = await User.Register(name,email,hash,tel,category,code);
        if(found){
            const context ="To register click here : localhost:3000/GUB/send?code="+code+"&userid="+found.id;
            Email.send(email,'Register',context);
            res.send(`Check your email to vertify your account`);
            }else{
                res.redirect('/GUB/home');
            }
     }             
 }));







//revive
router.get('/revive', asyncHandler(async function(req, res) {
    res.locals.title = 'Revive'
    res.render('user/revive');
}));


router.post('/revive',asyncHandler(async function(req, res) {
    const { email ,tel} = req.body;
    const user = await User.findbyEmail(email);
    if(user){
        if(tel == user.Tel){
            const code = randomString(4);
            const hash = brcypt.hashSync(code,10);
            user.Password = hash;
            await user.save();
            const context ="Your password was changed : "+ code;
            Email.send(email,'(GUB) Revive your account ',context);
        }
    }
    res.send('Check your email to revive your account');
}));



module.exports = router;// do router cung la 1 cai module nen can export no ra