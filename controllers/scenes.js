var express = require('express');
var router  = express.Router();
var scene		= require('../models/scene');
var user 		= require('../models/user');
var multer  = require('multer');
var fs 			= require('fs');

router.post('/upload', 
	multer({ dest : './public/uploads' }).fields([
		{ name : 'molecule', maxCount : 1 },
		{ name : 'script', maxCount : 1 }
	]), (req, res, next) => {
	if(!req.user) { res.render('login', { message : 'You must login first!', isAuth : req.isAuthenticated() }); }
	else {

		var gfs = req.app.get('gridfs');	
		var writestream = gfs.createWriteStream({ filename : req.files['molecule'].originalname });
		fs.createReadStream(req.files['molecule'][0].path).pipe(writestream).on('close', (molecule) => {
			var molecule_id = molecule._id;
			fs.unlinkSync(req.files['molecule'][0].path);
			writestream = gfs.createWriteStream({ filename : req.files['script'].originalfilename });
			fs.createReadStream(req.files['script'][0].path).pipe(writestream).on('close', (script) => {
				var script_id = script._id;
				fs.unlinkSync(req.files['script'][0].path);
				new scene({
					_author : req.user._id,
					title : req.body.title,
					category : req.body.category,
					description : req.body.description,
					molfile : molecule_id,
					script : script_id
				}).save((err, scene) => {
					if (err) { 
						res.render('dashboard', { message : 'error', user : req.user, isAuth : req.isAuthenticated() }); 
					}			
					else {
						user.findByIdAndUpdate(
							req.user._id,
							{$push: {'scenes' : scene._id }},
							{safe : true, upsert : true, new : true},
							(err) => {
								if (err) { res.render('dashboard', { message : 'error', 	user : req.user, isAuth : req.isAuthenticated() }); }
								else 		 { res.render('dashboard', { message : 'success', user : req.user, isAuth : req.isAuthenticated() }); }
							}
						);
					}
				});

			});
		});

	}
});

module.exports = router
