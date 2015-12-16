var express  		 = require('express');
var router   		 = express.Router();
var scenes       = require('../models/scene');
var playlist = require('../models/playlist');

router.post('/create', (req, res, next) => {
	playlist.findOne({ name : req.body.name }, (err, found) => {
		if (found) {
      if (req.user.scenes) {
        scenes.find({_author: req.user}, (err, userScenes) => {
          res.render('playlists', 	 {
            message: 'Playlist with that name already created',
            scenes : userScenes,
            isAuth : req.isAuthenticated()
          });
        })
      }
    }
		else {
      console.log(req.body);
			new playlist({
				name 				: req.body.name,
				description : req.body.description,
        publiclyShared: true
			}).save((err, org) => {
				if (err) {
          if (req.user.scenes) {
            scenes.find({_author: req.user}, (err, userScenes) => {
              res.render('playlists', 	 {
                message: 'Error Creating Playlist',
                scenes : userScenes,
                isAuth : req.isAuthenticated()
              });
            })
          }
        }
				else 		 {
					playlist.find((err) => {
            if (req.user.scenes) {
        			scenes.find({_author: req.user}, (err, userScenes) => {
        				res.render('playlists', 	 {
                  message: 'Playlist Created',
        					scenes : userScenes,
        					isAuth : req.isAuthenticated()
        				});
        			})
            }
					});
				}
			});
		}
	});
});

module.exports = router;
