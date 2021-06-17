const { promisify } = require('util');
const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage:  multer.memoryStorage() });
const rename = promisify(require('fs').rename);
const Movie = require('../models/movie');
const ensureadmin = require('../middlewares/ensure_admin');
router.use(ensureadmin);
router.use(function(req,res,next){
    res.locals.title = 'Movie';
    res.locals.link = '/GUB/admin';
    next();
})
router.get('/movie/picture/:id', asyncHandler( async function(req,res){
    const movie = await Movie.findByPk(req.params.id);
    if(!movie || !movie.Poster){
        res.status(404).send('File not fould');
    }else{
        res.header('Content-Type','image/jpeg').send(movie.Poster);
    }
     }));
//create
router.get('/movie',asyncHandler (async function(req,res){
    const movies = await Movie.findAll();
    res.render('movie/movie',{movies});
    }));
    
    router.get('/movie/add',asyncHandler (async function(req,res){
        if(req.session.check){
            res.locals.check = 'true';
        }else{
            res.locals.check = null;
        }
        res.render('movie/addmovie');
        })); 

router.post('/movie/add',upload.single('poster'),asyncHandler(async function(req, res) {
    const {Name,Time,ReleaseDate,Decription,Category,check,trailer,Genres,Actors,Directors} = req.body;
  
    var link = trailer.split('v=')[1];
    const ampersandPosition = link.indexOf('&');
    if(ampersandPosition != -1) {
    link = link.substr(0, ampersandPosition);
    }
    var max = await Movie.max('id');
    if(!max){
        max = 0;
    }
    const id = max + 1;
    const movie = await Movie.create({id,Name , Time, ReleaseDate, Decription,Category, Trailer:link ,Genres,Actors,Directors});
    if(movie){
        movie.Poster = req.file.buffer;
        await movie.save();
        if(check){
            req.session.check = 'true';
            res.redirect('/movie/add');
        }else{
            delete req.session.check ;
         res.redirect('/movie');   
        }
        
    }else{
        res.locals.title = 'Error';
    const error = "Add movie unsucessfully";
    res.render('alerts/alerts',{error});
    }

}));



//update
router.get('/movie/update/:id',asyncHandler (async function(req,res){
    const id = req.params.id;
    const movie = await Movie.findByPk(id);
    if(movie){
    res.render('movie/updatemovie',{movie});
    }else{
        res.locals.title = 'Error';
    const error = "This movie was not found";
    res.render('alerts/alerts',{error});
    }
    }));

router.post('/movie/update/:id',upload.single('poster'),asyncHandler(async function(req, res) {
    const id = req.params.id;
    const {name,time,releasedate,decription,category,trailer,genres,actors,directors} = req.body;
    const movie = await Movie.findByPk(id);
    if(movie){
        if(name){
            movie.Name = name;
        }
        if(trailer){
            var link = trailer.split('v=')[1];
            const ampersandPosition = link.indexOf('&');
            if(ampersandPosition != -1) {
            link = link.substr(0, ampersandPosition);
            }
             movie.Trailer = link;
        }
        if(genres){
            movie.Genres = genres;
        }
        if(actors){
            movie.Actors = actors;
        }
        if(directors){
            movie.Directors = directors;
        }
        if(time){
            movie.Time = time;
        }
        if(releasedate){
            movie.ReleaseDate = releasedate;
        }
        if(category){
            movie.Category = category;
        }
        if(req.file){
            movie.Poster = req.file.buffer;
        }
       if(decription){
           movie.Decription = decription;
       }
        await movie.save();
        res.redirect('/movie');
    }else{
        res.locals.title = 'Error';
    const error = "This movie was not found";
    res.render('alerts/alerts',{error});
    }
}));
//delete
router.get('/movie/delete/:id',asyncHandler (async function(req,res){
    const id = req.params.id;
    const movie = await Movie.findByPk(id);
    if(movie){
        await movie.destroy();
        res.redirect('/movie');
    }else{
        res.locals.title = 'Error';
    const error = "This movie was not found";
    res.render('alerts/alerts',{error});
    }
}));

 module.exports = router;