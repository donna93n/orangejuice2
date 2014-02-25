var data = require('../contacts.json');

exports.view = function(req, res){
	res.render('contacts', data);
};

