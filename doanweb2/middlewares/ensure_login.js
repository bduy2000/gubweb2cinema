module.exports = function ensureloggedin(req , res , next){
    if(!req.user){
        res.redirect('/GUB/user/login');
    }else{
     next();
    }
 };