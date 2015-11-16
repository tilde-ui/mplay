var mongoose 							= require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
	firstName : { type: String, required: true },
	lastName  : { type: String, required: true },
	username  : { type: String, required: true, unique: true }, 
	password  : { type: String, required: true}, 
	bio				: { type: String, required: false}
});

userSchema.plugin(passportLocalMongoose);

mongoose.connect('mongodb://localhost/mplay_db');

var user = mongoose.model('user', userSchema);

module.exports = user;
