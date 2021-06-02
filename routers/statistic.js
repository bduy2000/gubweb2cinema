const { promisify } = require('util');
const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const rename = promisify(require('fs').rename);
const Movie = require('../models/movie');
const ensureadmin = require('../middlewares/ensure_admin');
const ShowTime = require('../models/showtime');
const Booking = require('../models/booking');
const Ticket = require('../models/ticket');
const { Op } = require('sequelize');
const db = require('../models/db');
router.use(ensureadmin);
router.use(function (req, res, next) {
    res.locals.title = 'Statistic';
    next();
})

//create
router.get('/statistic', asyncHandler(async function (req, res) {
    const movies = await Movie.findAll({
        attributes: {
            include: [[db.fn('COUNT', db.col('"Movie"."id"')), 'count']]
        }, include: [{ model: ShowTime, right: true, attributes: [], include: [{ model: Booking, right: true, attributes: [], include: [{ model: Ticket, right: true, attributes: [] }] }] }],
        group: ['"Movie"."id"']
    });
    //console.log(movies);
    const parserData = [];
    movies.forEach((movie) => {
        console.log(movie.dataValues);
        parserData.push(movie.dataValues)
    })
    res.render('statistic/movie', { parserData });
}));


router.post('/statistic', asyncHandler(async function (req, res) {
    const { from, to } = req.body;
    const movies = await Movie.findAll({
        attributes: {
            include: [[db.fn('COUNT', db.col('"Movie"."id"')), 'count']]
        }, include: [{ model: ShowTime, right: true, attributes: [], include: [{ model: Booking, right: true, where: { DateTime: { [Op.between]: [from, to] } }, attributes: [], include: [{ model: Ticket, right: true, attributes: [] }] }] }],
        group: ['"Movie"."id"']
    });

    console.log(movies);

    res.render('statistic/movie', { movies });
}));



module.exports = router;