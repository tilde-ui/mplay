var mongoose 							= require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var ObjectId 							= mongoose.Schema.Types.ObjectId;

var userSchema = new mongoose.Schema({
	firstName :  { type: String, 	 required: true  						 },
	lastName  :  { type: String, 	 required: true  						 },
	bio				:  { type: String, 	 required: false 						 },
	email			:	 { type: String, 	 lowercase: true, trim: true },
	molecules : [{ type: ObjectId, ref: 'molecule' 						 }],
	adminOf		:	[{
		organization:		{type: ObjectId, ref:	'organization'},
		permissionType: {type: String}} //open to changes...
	]
});

userSchema.plugin(passportLocalMongoose);
var user = mongoose.model('user', userSchema);

module.exports = user;
