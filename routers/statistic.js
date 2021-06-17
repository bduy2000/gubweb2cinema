const { promisify } = require('util');
const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const rename = promisify(require('fs').rename);
const Cinema = require('../models/cinema');
const Movie = require('../models/movie');
const ensureadmin = require('../middlewares/ensure_admin');
const ShowTime = require('../models/showtime');
const Booking = require('../models/booking');
const Ticket = require('../models/ticket');
const { Op } = require('sequelize');
const db = require('../models/db');
const Theater = require('../models/theater');
const moment = require('moment');
router.use(ensureadmin);

router.use(function (req, res, next) {
    res.locals.title = 'Statistic';
    next();
})

//create
router.get('/statistic/movies', asyncHandler(async function (req, res) {
    res.render('statistic/movie');

}));





router.get('/statistic/cinemas', asyncHandler(async function (req, res) {
    res.render('statistic/cinema');
}));






//
router.get('/statistic/chart/movies', asyncHandler(async function (req, res) {
    const {from,to} = req.query;
    
    const movies = await Movie.findAll({
        attributes: {
            include: [
                [db.fn('COUNT', db.col('"ShowTimes"."Bookings"."Tickets"."id"')), 'count'],
                [db.fn('SUM', db.col('"ShowTimes"."Bookings"."Tickets"."Price"')), 'TotalPrice']
            ]
        }, 
        include: [{ model: ShowTime, attributes: [], 
            include: [{ model: Booking,where: from && to ? { DateTime: { [Op.between]: [ moment(from).format(),moment(to).add(1, 'day').subtract(1, 'seconds').format(),] } } : {},  attributes: [], 
                include: [{ model: Ticket, attributes: [] 
                        }] 
                    }] 
                }],
        group: ['"Movie"."id"']
    });
    var labels = [];
    var total = [];
    var count = []; 
    movies.map(movie =>{
        if(!movie.dataValues.TotalPrice){
            total.push(0);
        }else{
            const money = movie.dataValues.TotalPrice;
            total.push(parseInt(money));
        }
        labels.push(movie.Name);
        const num = movie.dataValues.count;
        count.push(parseInt(num));
    });


const data = {
    labels: labels,
    datasets: [
      {
        label: 'Count',
        data: count,
        yAxisID: 'count',
        backgroundColor: 'rgba(255, 174, 0)',
      },
      {
        label: 'Revenue',
        data: total,
        yAxisID: 'revenue',
        backgroundColor: 'rgba(38, 38, 36)',
      }
    ]
};

res.json(data);
}))


//
router.get('/statistic/chart/cinemas', asyncHandler(async function (req, res) {
    const {from,to} = req.query;
    
    const cinemas = await Cinema.findAll({
        attributes: {
            include: [
                [db.fn('COUNT', db.col('"Theaters.ShowTimes"."Bookings"."Tickets"."id"')), 'count'],
                [db.fn('SUM', db.col('"Theaters.ShowTimes"."Bookings"."Tickets"."Price"')), 'TotalPrice']
            ]
        }, 
        include: [{model:Theater,attributes: [],
        include: [{ model: ShowTime, attributes: [], 
            include: [{ model: Booking,where: from && to ? { DateTime: { [Op.between]: [ moment(from).format(),moment(to).add(1, 'day').subtract(1, 'seconds').format(),] } } : {},  attributes: [], 
                include: [{ model: Ticket, attributes: [] 
                        }] 
                    }] 
                }]
            }],
        group: ['"Cinema"."id"']
    });
    var labels = [];
    var total = [];
    var count = []; 
    cinemas.map(cinema =>{
        if(!cinema.dataValues.TotalPrice){
            total.push(0);
        }else{
            const money = cinema.dataValues.TotalPrice;
            total.push(parseInt(money));
        }
        labels.push(cinema.Name);
        const num = cinema.dataValues.count;
        count.push(parseInt(num));
    });


const data = {
    labels: labels,
    datasets: [
      {
        label: 'Count',
        data: count,
        yAxisID: 'count',
        backgroundColor: 'rgba(255, 174, 0)',
      },
      {
        label: 'Revenue',
        data: total,
        yAxisID: 'revenue',
        backgroundColor: 'rgba(38, 38, 36)',
      }
    ]
};

res.json(data);
}))
module.exports = router;