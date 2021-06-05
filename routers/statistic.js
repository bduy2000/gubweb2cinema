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

router.use(ensureadmin);

router.use(function (req, res, next) {
    res.locals.title = 'Statistic';
    next();
})

//create
router.get('/statistic/movies', asyncHandler(async function (req, res) {
    const movies = await Movie.findAll({
        attributes: {
            include: [
                [db.fn('COUNT', db.col('"Movie"."id"')), 'count'],
                [db.fn('SUM', db.col('"ShowTimes"."Price"')), 'TotalPrice']
            ]
        }, 
        include: [{ model: ShowTime, right: true, attributes: [], 
            include: [{ model: Booking, right: true, attributes: [], 
                include: [{ model: Ticket, right: true, attributes: [] 
                        }] 
                    }] 
                }],
        group: ['"Movie"."id"']
    });
    
    res.render('statistic/movie', { movies });

}));


router.post('/statistic/movies', asyncHandler(async function (req, res) {
    const { from, to } = req.body;
    const movies = await Movie.findAll({
        attributes: {
            include: [
                [db.fn('COUNT', db.col('"Movie"."id"')), 'count'],
                [db.fn('SUM', db.col('"ShowTimes"."Price"')), 'TotalPrice']
            ]
        }, 
        include: [{ model: ShowTime, right: true, attributes: [], 
            include: [{ model: Booking, right: true, where: { DateTime: { [Op.between]: [from, to] } }, attributes: [], 
                include: [{ model: Ticket, right: true, attributes: [] 
                        }] 
                    }] 
                }],
        group: ['"Movie"."id"']
    });
    console.log(movies);
    res.render('statistic/movie', { movies });
}));


router.get('/statistic/cinemas', asyncHandler(async function (req, res) {
    const cinemas = await Cinema.findAll({
        attributes: {
            include: [
            [db.fn('COUNT', db.col('"Cinema"."id"')), 'count'],
            [db.fn('SUM', db.col('"Theaters.ShowTimes"."Price"')), 'TotalPrice']
        ],    
        }, 
        include: [{ model: Theater, right: true, attributes: [], 
            include: [{ model: ShowTime, right: true, attributes: [], 
                include: [{ model: Booking, right: true, attributes: [], 
                    include: [{ model: Ticket, right: true, attributes: [] 
                            }] 
                        }] 
                    }] 
                }],
        group: ['"Cinema"."id"']
    });
    console.log(cinemas);
    res.render('statistic/cinema', { cinemas });
}));


router.post('/statistic/cinemas', asyncHandler(async function (req, res) {
    const { from, to } = req.body;
    const cinemas = await Cinema.findAll({
        attributes: {
            include: [
                [db.fn('COUNT', db.col('"Cinema"."id"')), 'count'],
                [db.fn('SUM', db.col('"Theaters.ShowTimes"."Price"')), 'TotalPrice']
            ],
        }, 
        include: [{ model: Theater, right: true, attributes: [], 
            include: [{ model: ShowTime, right: true, attributes: [], 
                include: [{ model: Booking, right: true, where: { DateTime: { [Op.between]: [from, to] } }, attributes: [], 
                include: [{ model: Ticket, right: true, attributes: [] 
                        }] 
                        }] 
                    }] 
                }],
        group: ['"Cinema"."id"']
    });
    console.log(cinemas);
    res.render('statistic/cinema', { cinemas });
}));

module.exports = router;