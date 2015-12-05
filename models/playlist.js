var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var playlistSchema = new mongoose.Schema({

	name						:	{type: String,		required: true},
	descrption			:	{type: String,		required: false},
	molecules 			:[{type: ObjectId, ref : 'molecule'}],
	publicly_shared	: {type: Boolean}

});

var playlist = mongoose.model('playlist', playlistSchema);

module.exports = playlist;
