var express  		= require('express')
var router   		= express.Router();
var passport 		= require('passport');
var user     		= require('../models/user');

router.post('/login', (req, res, next) => {
	if (req.session.user) { res.redirect('/dash'); }
	else {
		passport.authenticate('local', (err, user, info) => {
			if      (err)   { res.render('login', { message : err, isAuth : req.isAuthenticated() }); }
			else if (!user) { res.render('login', { message : 'No User/Incorrect password', isAuth : req.isAuthenticated() }); }
			else {
				req.logIn(user, (err) => {
					if (err) { res.render('login', { message : err,	isAuth : req.isAuthenticated() }); }
					else {
						req.session.user = req.user;
						res.render('dashboard', { message : 'Login Success', user : req.user, isAuth : req.isAuthenticated() });
					}
				});
			}
		})(req, res, next);
	}
});

router.get('/logout', (req, res) => {
	req.session.user = undefined;
	req.logout();
	res.render('login', { message: 'logged out', isAuth : req.isAuthenticated() });
});

router.post('/register', (req, res, next) => {
	user.findOne({ username : req.body.username }, (err, found) => {
		if (found) { res.render('register', { message : 'User exists', isAuth  : req.isAuthenticated() }); }
		if (req.body.organization) {
			user.register(new user({
				firstName 	 : req.body.firstName,
				lastName  	 : req.body.lastName,
				username  	 : req.body.username,
				email 			 : req.body.email,
				password  	 : req.body.password,
				bio					 : req.body.bio,
				organization : req.body.organization,
				auth 			 	 : 'AUTHOR'
			}), req.body.password, (err, found) => {
				if (err) { res.render('register', { message : err, isAuth  : req.isAuthenticated() });       }
				else 		 { res.render('login',    { message : 'Registration Success', isAuth  : req.isAuthenticated() }); }
			});
		} else {
			user.register(new user({
				firstName : req.body.firstName,
				lastName  : req.body.lastName,
				username  : req.body.username,
				email 		: req.body.email,
				password  : req.body.password,
				bio				: req.body.bio,
				auth 			: 'AUTHOR'
			}), req.body.password, (err, found) => {
				if (err) { res.render('register', { message : err, isAuth  : req.isAuthenticated() });       }
				else 		 { res.render('login',    { message : 'Success', isAuth  : req.isAuthenticated() }); }
			});
		}
	});
});

router.post('/update', (req, res, next) => {
	if (!req.user) { res.render('login', 				{ message: 'You must login first!', isAuth : req.isAuthenticated() }); }
	else {
		var fields = {
			firstName : req.body.firstName,
			lastName 	: req.body.lastName,
			email 		: req.body.email,
			bio 			: req.body.bio
		}
		for (item in fields) { if (fields[item] === '' || fields[item] === null) { delete fields[item] } }
		user.findByIdAndUpdate(
			req.user._id,
			{$set: fields},
			{safe: true},
			(err) => {
				if (err) { res.render('settings',  { message : 'error',	 isAuth : req.isAuthenticated() }); }
				else 		 { res.render('dashboard', { message : 'success', user : req.user, isAuth : req.isAuthenticated() }); }
			}
		)
	}
});

module.exports = router;
