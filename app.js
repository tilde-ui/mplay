var express 		 = require('express');
var path 				 = require('path');
var favicon 		 = require('serve-favicon');
var logger 			 = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser 	 = require('body-parser');

var expressSess 	= require('express-session');
var mongoose    	= require('mongoose');
var passport 			= require('passport');
var localStrategy = require('passport-local').Strategy;
var grid					= require('gridfs-stream');

var controllers = require('./controllers/index');
var users 		  = require('./controllers/users');
var molecules   = require('./controllers/molecules');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSess({
	secret 						: process.env.SESSION_SECRET || 'secret',
	saveUninitialized : false,
	resave 						: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', controllers);
app.use('/users', users);
app.use('/molecules', molecules);

var user = require('./models/user');
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

mongoose.connect('mongodb://localhost/mplay_db')
mongoose.connection.once('open', () => {
	var gfs = grid(mongoose.connection.db, mongoose.mongo);
	app.set('gridfs', gfs);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
