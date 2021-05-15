module.exports = function ensurelogin(req , res , next){
    if(!req.user){
        res.redirect('/GUB/home');
    }else{
     next();
    }
 };