var data = require("../activities.json");

exports.addActivity = function(req, res) {   
	var data_2 = {  	
		"name" : req.query.name	 
	};
	data.activities.push(data_2);

res.render('activity', data);
};
