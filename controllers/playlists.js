var express  		 = require('express');
var router   		 = express.Router();
var scenes       = require('../models/scene');
var user      = require('../models/user');
var playlist = require('../models/playlist');

router.post('/create', (req, res, next) => {
  scenes.find({_author: req.user}, (err, userScenes) => {
    var molecule_list = JSON.parse(req.body.molecules).map((item) => {
      return userScenes[item]._id
    });
    console.log(molecule_list);
    new playlist({
      _author     : req.user._id,
			name 				: req.body.name,
			description : req.body.description,
      molecules   : molecule_list
		}).save((err, pl) => {
			if (err) {
        console.log(err);
        playlist.find({_author: req.user}, (err, pls) => {
    			res.render('playlistGallery', 	 {
            message : 'Error Creating Playlist',
    				playlists : pls,
    				isAuth : req.isAuthenticated()
    			});
    		})
      }
			else 		 {
        user.findByIdAndUpdate(
          req.user._id,
          {$push: {'playlists' : pl._id }},
          {safe : true, upsert : true, new : true},
          (err) => {
            if (err) {
              playlist.find({_author: req.user}, (err, pls) => {
                res.render('playlistGallery', 	 {
                  message: 'Error Saving Playlist',
        					playlists : pls,
        					isAuth : req.isAuthenticated()
        				});
          		})
            }
            else 		 {
              playlist.find({_author: req.user}, (err, pls) => {
                res.render('playlistGallery', 	 {
                  message: 'Playlist Created',
        					playlists : pls,
        					isAuth : req.isAuthenticated()
        				});
          		})

            }
          }
        );

			}
		});
  })
});

module.exports = router;
