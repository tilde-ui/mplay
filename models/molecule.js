var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var moleculeSchema = new mongoose.Schema({
	_author			: { type: ObjectId, ref: 'user', 		required: true },
	title 			:	{ type: String, 	required: true 								 },
	category 		: { type: String, 	required: true 								 },
	description : { type: String, 	required: true 								 },
	molfile			: { type: ObjectId, required: true								 }
});

var molecule = mongoose.model('molecule', moleculeSchema);

module.exports = molecule;
