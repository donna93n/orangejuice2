var data = require('../editActivity.json');

exports.view = function(req, res){
	res.render('addActivity2',data);
};

