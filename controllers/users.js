var express = require('express')
var router  = express.Router();
var user    = require('../models/user'); 

router.post('/register', function(req, res, next) {
	console.log('USERNAME: ' + req.body.username);
	console.log('PASSWORD: ' + req.body.password);
	console.log('CONFIRM: ' + req.body.confirm_pw);
	var username   = req.body.username;
	var password   = req.body.password;
	var confirm_pw = req.body.confirm_pw;
	user.findOne({ username : username }, function(err, found) {
		if (err) { throw err; }
		else if (found) { console.log('Already a user!'); }
		else { 
			var newuser = new user({
				username : username,
				password : password
			});
			newuser.save(function(err) {
				if (err) { throw err; }
				else { 
					console.log('user created. you a mothafukin boss bruh');
					res.render('login'); }
			});
		}
	});
});

module.exports = router;
