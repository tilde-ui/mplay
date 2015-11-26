var express  = require('express');
var router   = express.Router();
var molecule = require('../models/molecule');
var user 		 = require('../models/user');

router.post('/upload_mol', (req, res, next) => {
	new molecule({
		_author  		: req.user._id,
		title		 		: req.body.title,
		category 		: req.body.category,
		description : req.body.description
	}).save((err, mol) => {
		if (err) { console.log(err); res.render('dashboard', { message : 'error', 	isAuth : req.isAuthenticated() }); }
		else { 
			user.findByIdAndUpdate(
				req.user._id,
				{$push: {'molecules': mol._id }},
				{safe: true, upsert: true, new: true},
				(err) => {
					if (err) { res.render('dashboard', { message: 'error', 	 isAuth : req.isAuthenticated() }); }
					else 		 { res.render('dashboard', { message: 'success', isAuth : req.isAuthenticated() }); }
				}
			);
		}
	});
});

module.exports = router;
