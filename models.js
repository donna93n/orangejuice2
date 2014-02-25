
var Mongoose = require('mongoose');


var ActivitySchema = new Mongoose.Schema({
	"name": String
});

exports.Activities = Mongoose.model('Activities', ActivitySchema);


