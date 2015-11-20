var mongoose 							= require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
	firstName : { type: String, required: true },
	lastName  : { type: String, required: true },
	//username is automatically added by pasport
	bio				: { type: String, required: false},
	email			:	{ type: String, lowercase: true, trim: true}
});

userSchema.plugin(passportLocalMongoose);
var user = mongoose.model('user', userSchema);

module.exports = user;
