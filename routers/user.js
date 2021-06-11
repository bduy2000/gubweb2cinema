const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Email = require('../models/email');
const randomString = require('random-base64-string');
const brcypt = require('bcrypt');
router.use(function(req,res,next){
    res.locals.title = 'Log in';
    res.locals.link = '/GUB/home';
    next();
})



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
            res.locals.title = 'Error';
        const error = "You must register";
        res.render('alerts/alerts',{error});
        }
}));


router.post('/register',asyncHandler (async function(req,res){
    const {name,email,tel,password,confirmpassword,category} = req.body;
    const finduser = await User.findbyEmail(email);
     if(password != confirmpassword){
        res.locals.title = 'Error';
        const error = "Those password was not correct";
        res.render('alerts/alerts',{error});
     }else if(finduser){
        res.locals.title = 'Error';
        const error = "This account was exist";
        res.render('alerts/alerts',{error});
     }else{
     const code = randomString(4);
     const hash = brcypt.hashSync(password,10);
     var max = await User.max('id');
     if(!max){
         max = 0;
     }
     const id = max + 1;
     const found = await User.Register(id,name,email,hash,tel,category,code);
        if(found){
            const context ="To register click here : https://gubcinema.herokuapp.com/GUB/send?code="+code+"&userid="+found.id;
            Email.send(email,'Register',context);
            res.send(`Check your email to vertify your account`);
            }else{
                res.redirect('/GUB/home');
            }
     }             
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