module.exports = function ensureadmin(req , res , next){
    const user = req.user;
    if(!user || user.Category != 'admin'){
        res.redirect('/GUB/home');
    }else {
     next();
    }
 };