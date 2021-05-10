const { promisify } = require('util');
const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage:  multer.memoryStorage() });
const rename = promisify(require('fs').rename);
const Movie = require('../models/movie');

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
    

router.post('/movie/create',upload.single('poster'),asyncHandler(async function(req, res) {
    const {name,time,releasedate,category} = req.body;
    const movie = await Movie.create({Name: name , Time: time, ReleaseDate: releasedate , Category: category});
    if(movie){
        movie.Poster = req.file.buffer;
        await movie.save();
        res.redirect('/movie');
    }else{
        res.send('error');
    }
}));



//update
router.get('/movie/update/:id',asyncHandler (async function(req,res){
    const id = req.params.id;
    const movie = await Movie.findByPk(id);
    res.locals.title = movie.Name;
    res.render('movie/updatemovie',{movie});
    }));

router.post('/movie/update/:id',upload.single('poster'),asyncHandler(async function(req, res) {
    const id = req.params.id;
    const {name,time,releasedate,category} = req.body;
    const movie = await Movie.findByPk(id);
    if(movie){
        if(name){
            movie.Name = name;
        }
        if(time){
            movie.Time = time;
        }
        if(releasedate){
            movie.ReleaseDate = releasedate;
        }
        if(req.file){
            movie.Poster = req.file.buffer;
        }
        movie.Category = category;
        await movie.save();
        res.redirect('/movie');
    }else{
        res.send('error');
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
        res.send('error');
    }
}));

 module.exports = router;