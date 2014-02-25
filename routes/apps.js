var data = require('../apps.json');

exports.view = function(req, res){
	res.render('apps',data);
};

