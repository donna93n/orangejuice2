var data = require('../activities.json');

exports.view = function(req, res){
	console.log(data);
	res.render('activity', data);
};

