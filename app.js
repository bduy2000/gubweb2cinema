//cac modules
const express = require('express');
const cookieSession = require('cookie-session');
const movieauthRouter = require('./routers/movieauth');
const userRouter = require('./routers/user');
const authRouter = require('./routers/auth');
const homeRouter = require('./routers/home');
const MovieRouter = require('./routers/movie');
const CinemaRouter = require('./routers/cinema');
const TheaterRouter = require('./routers/theater');
const ShowTimeRouter = require('./routers/showtime');
const BookingRouter = require('./routers/booking');
const TicketRouter = require('./routers/ticket');
const userMiddleware = require('./middlewares/user');
const expressLayouts = require('express-ejs-layouts');
const db = require('./models/db');

//su dung cac routers
const app = express();


// add cai cookie nay trc de cac module khac co the xai
app.use(cookieSession({
  name: 'session',
  keys: [ process.env.COOKIE_KEY || 'secret'],
  maxAge: 24 * 60 * 60 * 1000,
}))

app.use(userMiddleware);
app.use(express.urlencoded({extended: false}));// ham xu li cac du lieu dc post len
app.use(express.static(__dirname + '/public'));//nhung cai trong thu muc public co the load len
app.use(expressLayouts);
app.use('/GUB/movies',movieauthRouter);
app.use('/GUB/user',userRouter); // tat ca duong dan /TODO/.. thi chay dc
app.use('/GUB/profile',authRouter);
app.use('/GUB',homeRouter);
app.use(CinemaRouter);
app.use(TheaterRouter);
app.use(MovieRouter);
app.use(ShowTimeRouter);
app.use(BookingRouter);
app.use(TicketRouter);

//Template
app.set('view engine','ejs');//Dung ejs

db.sync().then(function(){

  //server chay tren port ?
const port = process.env.PORT ||  3000;
console.log(`Server is listening on port ${port}`);
app.listen(port);
}).catch(console.error);