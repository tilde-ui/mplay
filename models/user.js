var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mplay_db');

// var userSchema = new mongoose.Schema({
// 	username: { type: String, required: true, unique: true }, 
// 	password: { type: String, required: true}, 
// });

var userSchema = new mongoose.Schema({
	firstName : { type: String, required: true },
	lastName  : { type: String, required: true },
	email  		: { type: String, required: true, unique: true }, 
	password  : { type: String, required: true}, 
	bio				: { type: String, required: false}
});

var user = mongoose.model('user', userSchema);

module.exports = user;
