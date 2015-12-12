var express  		 = require('express');
var router   		 = express.Router();
var organization = require('../models/organization');

router.post('/register', (req, res, next) => {
	organization.findOne({ name : req.body.name }, (err, found) => {
		if (found) { res.render('organization', { message : 'Organization exists', isAuth: req.isAuthenticated() }); }
		else {
			new organization({
				name 				: req.body.name,
				description : req.body.description
			}).save((err, org) => {
				if (err) { res.render('createOrganization', { message : 'Error', 										isAuth : req.isAuthenticated() }); }
				else 		 {
					organization.find((err, orgs) => {
						res.render('organization', { message : 'Organization registered!', user : req.user, orgs : orgs, isAuth : req.isAuthenticated() });
					});
				}
			});
		}
	});
});

module.exports = router;
