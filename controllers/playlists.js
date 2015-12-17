var express  		 = require('express');
var router   		 = express.Router();
var scenes       = require('../models/scene');
var playlist = require('../models/playlist');

router.post('/create', (req, res, next) => {
  scenes.find({_author: req.user}, (err, userScenes) => {
    var molecule_list = JSON.parse(req.body.molecules).map((item) => {
      return userScenes[item]._id
    })
    console.log(molecule_list);
    new playlist({
			name 				: req.body.name,
			description : req.body.description,
      molecules   : molecule_list,
      publiclyShared: req.body.public
		}).save((err) => {

			if (err) {
        if (req.user.scenes) {
          res.render('playlists', 	 {
            message: 'Error Creating Playlist',
            scenes : userScenes,
            isAuth : req.isAuthenticated()
          });
        }
      }
			else 		 {

				res.render('playlists', 	 {
          message: 'Playlist Created',
					scenes : userScenes,
					isAuth : req.isAuthenticated()
				});
			}
		});
  })
});

module.exports = router;
