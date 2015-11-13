var express = require('express')
var router  = express.Router();
var model   = require('../models/user'); 

router.post('/register', function(req, res, next) {
	console.log('USERNAME: ' + req.body.username);
	console.log('PASSWORD: ' + req.body.password);
	console.log('CONFIRM: ' + req.body.confirm_pw);
});

module.exports = router;
