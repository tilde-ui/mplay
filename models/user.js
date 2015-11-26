var mongoose 							= require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var ObjectId 							= mongoose.Schema.Types.ObjectId;
var admin_types						= ['AUTHOR', 'LOCAL', 'GLOBAL']

var userSchema = new mongoose.Schema({
	firstName :	 { type: String, 	 required: true  						   },
	lastName  :	 { type: String, 	 required: true  						   },
	bio				:	 { type: String, 	 required: false 						   },
	email			:	 { type: String, 	 lowercase: true, trim: true   },
	molecules : [{ type: ObjectId, ref: 'molecule' 					     }],
	auth			:	 { type: String, 	 enum : admin_types 				   } //open to changes...
});

userSchema.plugin(passportLocalMongoose);
var user = mongoose.model('user', userSchema);

module.exports = user;
