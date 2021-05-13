module.exports = function ensurelogin(req , res , next){
    if(!req.user){
        res.redirect('/GUB/user/login');
    }else{
     next();
    }
 };