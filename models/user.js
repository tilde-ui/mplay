var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mplay_db');

var userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true }, 
	password: { type: String, required: true}, 
});

var user = mongoose.model('user', userSchema);

module.exports = user;
