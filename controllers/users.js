var express = require('express')
var router  = express.Router();
var user    = require('../models/user'); 

router.post('/login', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	user.findOne({ username : username }, function(err, found) {
		if (err) { throw err; }
		else if (found) { 
			if (found.password !== password) {
				res.render('login', { message: 'Incorrect password' });
			} else {
				req.session.uid = username;
				res.render('login', { message: 'Successful login' }); 
			}
		} else {
			res.render('login', { message: 'User doesn\'t exist' });
		}
	});
});

router.post('/register', function(req, res, next) {
	var username   = req.body.username;
	var password   = req.body.password;
	var confirm_pw = req.body.confirm_pw;
	if (password !== confirm_pw) { 
		res.render('register', { message: 'Passwords don\'t match!' }); 
	} else {
		user.findOne({ username : username }, function(err, found) {
			if (err) { throw err; }
			else if (found) { 
				res.render('register', { message: 'Username exists!' }); 
			}
			else { 
				var newuser = new user({
					username : username,
					password : password
				});
				newuser.save(function(err) {
					if (err) { throw err; }
					else { res.render('login', { message: 'User created!' }); }
				});
			}
		});
	}
});

module.exports = router;
