var express  = require('express')
var router   = express.Router();
var passport = require('passport');
var user     = require('../models/user'); 

router.post('/login', passport.authenticate('local'), function(req, res) {
	console.log(arguments);
	res.render('login', { message : 'success' });
});

router.post('/register', function(req, res, next) {
	user.findOne({ username : req.body.username }, function(err, found) {
		if (found) { res.render('register', { message: 'User exists' }); }
		user.register(new user({
			firstName : req.body.firstName,
			lastName  : req.body.lastName,
			username  : req.body.username,
			password  : req.body.password
		}), req.body.password, function(err, found) {
			if (err) { res.render('register', { message : err }); }
			res.render('register', { message : 'Success' });
		});
	});
});

module.exports = router;
