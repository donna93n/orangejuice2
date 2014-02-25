var data = require('../activities.json');

exports.addActivity = function(req, res){
	var newAct = {
		'name': req.query.actName
	};
	data.activities.push(newAct);
	console.log(data);
	res.render('activity', data);
};

