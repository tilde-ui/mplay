var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var organizationSchema = new mongoose.Schema({
	name             : { type: String,  required: true  },
	description	     : { type: String, 	required: true  },
	playlists				 : { type: ObjectId, ref: 'playlist'}
});

var organization = mongoose.model('organization', organizationSchema);

module.exports = organization;
