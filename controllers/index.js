var express 		 = require('express');
var router  		 = express.Router();
var organization = require('../models/organization');
var scenes			 = require('../models/scene');
var playlists		 = require('../models/playlist');

router.get('/', (req, res, next) => {
	if   (req.session.user) { res.render('dashboard', {  user : req.user, isAuth : req.isAuthenticated() }); }
	else 									  { res.render('login', 		{ isAuth : req.isAuthenticated() }); }
});

router.get('/dash', (req, res, next) => {
	if (!req.user) { res.render('login', { message : 'You must login first!', isAuth : req.isAuthenticated() }); }
  else 					 { res.render('dashboard', { user : req.user, isAuth : req.isAuthenticated() 							});}
});

router.get('/organization', (req, res, next) => {
	if (!req.user) { res.render('login', 				{ message: 'You must login first!', isAuth : req.isAuthenticated() }); }
	else 					 {
		organization.find((err, orgs) => {
			res.render('organization', { user : req.user, orgs : orgs, isAuth : req.isAuthenticated() });
		});
	}
});

router.get('/createOrganization', (req, res, next) => {
	if (!req.user) { res.render('login', 				{ message: 'You must login first!', isAuth : req.isAuthenticated() }); }
	else 					 { res.render('createOrganization', { isAuth : req.isAuthenticated() 														}); }
});

router.get('/settings', (req, res, next) => {
	if (!req.user) { res.render('login', 		{ message : 'You must login first!', isAuth : req.isAuthenticated() }); }
	else 					 { res.render('settings', { user : req.user, 									 isAuth : req.isAuthenticated() }); }
});

router.get('/installation', (req, res, next) => {
	if (!req.user) { res.render('login', 		{ message : 'You must login first!', isAuth : req.isAuthenticated() }); }
	else 					 { res.render('installation', { isAuth : req.isAuthenticated() }); }
});

router.get('/advancedSearch', (req, res, next) => {
	if (!req.user) { res.render('login', 		{ message : 'You must login first!', isAuth : req.isAuthenticated() }); }
	else 					 { res.render('advancedSearch', { isAuth : req.isAuthenticated() }); }
});

router.get('/createPlaylist', (req, res, next) => {
	if (!req.user) { res.render('login', 			 { message : 'You must login first!', isAuth : req.isAuthenticated() }); }
	else 					 {
		if (req.user.scenes) {
			scenes.find({_author: req.user}, (err, userScenes) => {
				res.render('createPlaylist', 	 {
					scenes : userScenes,
					isAuth : req.isAuthenticated()
				});
			})
		}
		else {
			res.render('uploadScene', {isAuth : req.isAuthenticated()});
		}
	}
});

router.get('/playlistGallery', (req, res, next) => {
	if (!req.user) { res.render('login', 			 { message : 'You must login first!', isAuth : req.isAuthenticated() }); }
	else 					 {
		playlists.find({_author: req.user}, (err, pls) => {
			res.render('playlistGallery', 	 {
				playlists : pls,
				isAuth : req.isAuthenticated()
			});
		})
	}
});

router.get('/uploadScene', (req, res, next) => {
	if (!req.user) { res.render('login', 			 { message : 'You must login first!', isAuth : req.isAuthenticated() }); }
	else 					 {
		if (req.user.scenes) {
			scenes.find({_author: req.user}, (err, userScenes) => {
				res.render('uploadScene', 	 {
					scenes : userScenes,
					isAuth : req.isAuthenticated()
				});
			})
		}
		else {
			res.render('uploadScene', {isAuth : req.isAuthenticated()});
		}
	}
});

router.get('/login', (req, res, next) => { res.render('login', { isAuth : req.isAuthenticated() }); });

router.get('/register', (req, res, next) => {
	organization.find((err, orgs) => {
		res.render('register', { orgs : orgs, isAuth : req.isAuthenticated() });
	});
});

module.exports = router;
