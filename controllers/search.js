var express = require('express');
var router  = express.Router();
var scene		= require('../models/scene');
var playlist= require('../models/playlist');
var user 		= require('../models/user');

router.post('/search', (req, res, next) => {
  console.log(req.body);
  scene.find({title: req.body.keywords}, (err, match) => {
    var results = match.map((item) => {
      console.log(item);
      user.findById(item._author, (err, author) => {
        if (err) {
          console.log(err);
        }
        console.log(author);
        return author.firstName
      })
    })
    console.log(results);
    res.render('advancedSearch', {results: match})
  })
});

module.exports = router
