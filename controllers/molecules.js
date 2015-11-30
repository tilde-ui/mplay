var express  = require('express');
var router   = express.Router();
var molecule = require('../models/molecule');
var user 		 = require('../models/user');
var multer	 = require('multer');
var fs			 = require('fs');

router.post('/upload_mol', multer({ dest: './public/uploads' }).single('molecule'), (req, res, next) => {
	var gfs 				= req.app.get('gridfs');
	var writestream = gfs.createWriteStream({ filename : req.file.filename });
	fs.createReadStream(req.file.path).pipe(writestream).on('close', (file) => {
		var file_id = file._id;
		fs.unlinkSync(req.file.path);
		new molecule({
			_author  		: req.user._id,
			title		 		: req.body.title,
			category 		: req.body.category,
			description : req.body.description,
			molfile			: file_id
		}).save((err, mol) => {
			if (err) { res.render('dashboard', { message : 'error', isAuth : req.isAuthenticated() }); }
			else {
				user.findByIdAndUpdate(
					req.user._id,
					{$push: {'molecules': mol._id }},
					{safe: true, upsert: true, new: true},
					(err) => {
						if (err) { res.render('dashboard', { message : 'error', 	 isAuth : req.isAuthenticated() }); }
						else 		 { res.render('dashboard', { message : 'success', isAuth : req.isAuthenticated() }); }
					}
				);
			}
		});
	});
});

module.exports = router;
