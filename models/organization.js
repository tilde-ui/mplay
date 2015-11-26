var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var organizationSchema = new mongoose.Schema({
	name             : { type: String, required: true },
  owner            : { type: ObjectId, ref: 'user', required: false },
	description	     : { type: String, 	required: true },
  installationUID  : { type: String,  required: false}
});

var organization = mongoose.model('organization', organizationSchema);

module.exports = organization;
