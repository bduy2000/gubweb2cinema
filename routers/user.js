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
            res.redirect('/GUB/home');
            }else{
                res.render('user/login');
            }
}));
//logout
router.get('/logout',function(req,res){
    delete req.session.UserId ;
    res.redirect('/GUB/home');
});

router.get('/customer/register',function(req,res){
    res.locals.title = 'Register';
    res.render('user/register');
});



router.post('/customer/register',asyncHandler (async function(req,res){
    const {name,email,tel,password,confirmpassword} = req.body;
  
    if(password != confirmpassword){
     res.send('Those passwords didn’t match. Try again');
    }else{
    const code = randomString(4);
    const hash = brcypt.hashSync(password,10);
    console.log(hash);
    const found = await User.Register(name,email,hash,tel,'customer',code);
       if(found){
           const context ="To register click here : localhost:3000/GUB/send?code="+code+"&userid="+found.id;
           Email.send(email,'Register',context);
           res.send(`Check your email to vertify your account`);
           }else{
               res.render('user/register');
           }
    }       
}));




//admin
router.get('/admin/register',function(req,res){
    res.locals.title = 'Register';
    res.render('user/register');
});

router.post('/admin/register',asyncHandler (async function(req,res){
    
    const {name,email,tel,password,confirmpassword} = req.body;
  
    if(password != confirmpassword){
     res.send('Those passwords didn’t match. Try again');
    }else{
    const code = randomString(4);
    const hash = brcypt.hashSync(password,10);
    console.log(hash);
    const found = await User.Register(name,email,hash,tel,'admin',code);
       if(found){
           const context ="To register click here : localhost:3000/GUB/send?code="+code+"&userid="+found.id;
           Email.send(email,'Register',context);
           res.send(`Check your email to vertify your account`);
           }else{
               res.render('user/register');
           }
    }             
}));

//profile
router.get('/profile', asyncHandler(async function(req, res) {
    const user = req.user;
    res.locals.title = user.Name;
    res.render('user/profile');
}));


router.post('/profile',asyncHandler(async function(req, res) {
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
//revive
router.get('/revive', asyncHandler(async function(req, res) {
    res.render('user/revive');
}));


router.post('/revive',asyncHandler(async function(req, res) {
    const { email ,tel} = req.body;
    const user = await User.findbyEmail(email);
    if(user){
        if(tel == user.Tel){
            const code = randomString(4);
            user.Code = code;
            await user.save();
            const context ="To revive click here : localhost:3000/GUB/user/changepass?code="+code+"&userid="+user.id;
            Email.send(email,'(GUB) Revive your account ',context);
        }
    }
    res.send('Check your email to revive your account');
}));

// change pass
router.get('/changepass', asyncHandler(async function(req, res) {
    res.locals.title = 'ChangePass';
    const {userid,code} = req.query;
    const user = await User.findbyId(userid);
    if(user){
        if(code == user.Code){
            req.session.UserId = userid;
            res.render('user/changepass');
        }
    }
    res.send('error');
    
}));


router.post('/changepass',asyncHandler(async function(req, res) {
    const { password ,confirmpassword} = req.body;
    if(password == confirmpassword){
        const user = req.user;
        const hash = brcypt.hashSync(password,10);
        user.Password = hash;
        user.Code = null;
        await user.save();
        res.redirect('profile');
    }else{
        res.render('user/changepass');
    }
    
}));


module.exports = router;// do router cung la 1 cai module nen can export no ra