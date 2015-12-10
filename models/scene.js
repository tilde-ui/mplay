var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var sceneSchema = new mongoose.Schema({
	_author  		: { type : ObjectId, required : true, ref : 'user' },
	title 	 		: { type : String, 	 required : true 							 },
	category 		: { type : String, 	 required : true 							 },
	description : { type : String, 	 required : true 							 },
	molfile 		: { type : ObjectId, required : true 							 },
	script  		: { type : ObjectId, required : true 							 }
});

var scene 		 = mongoose.model('scene', sceneSchema);
module.exports = scene;
