var express 		 = require('express');
var router  		 = express.Router();
var organization = require('../models/organization');

router.get('/', (req, res, next) => {
	if   (req.session.user) { res.render('dashboard', { isAuth : req.isAuthenticated() }); }
	else 									  { res.render('login', 		{ isAuth : req.isAuthenticated() }); }
});

router.get('/dash', (req, res, next) => {
	if (req.session.user) 		 { res.render('dashboard', { isAuth : req.isAuthenticated() }); }
	else { res.render('login', { isAuth : req.isAuthenticated() }); 													}
});

router.get('/register', (req, res, next) => { 
	organization.find((err, orgs) => {
		res.render('register', { orgs : orgs, isAuth : req.isAuthenticated() });
	});
});

router.get('/login', 	  		(req, res, next) => { res.render('login',    		 { isAuth : req.isAuthenticated() 								 }); });
router.get('/settings', 		(req, res, next) => { res.render('settings', 		 { isAuth : req.isAuthenticated(), user : req.user }); });
router.get('/installation', (req, res, next) => { res.render('installation', { isAuth : req.isAuthenticated() 							   }); });
router.get('/organization', (req, res, next) => { res.render('organization', { isAuth : req.isAuthenticated() 							   }); });
router.get('/playlists',   	(req, res, next) => { res.render('playlists', 	 { isAuth : req.isAuthenticated() 							   }); });

module.exports = router;
