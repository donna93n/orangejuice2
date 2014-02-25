
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var signup = require('./routes/signup');
var activity = require('./routes/activity');
var help =  require('./routes/help');
var login =  require('./routes/login');
var addActivity =  require('./routes/addActivity');
var tempSession =  require('./routes/tempSession');
var editActivity =  require('./routes/editActivity');
var apps =  require('./routes/apps');
var contacts =  require('./routes/contacts');
var apps =  require('./routes/apps');
var blockednotifications = require('./routes/blockednotifications');
var addAct =  require('./routes/addAct');
var editActivity2 = require('./routes/editActivity2');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/signup', signup.view);
app.get('/activity', activity.view);
app.get('/help', help.view);
app.get('/login', login.view);
app.get('/addActivity', addActivity.view);
app.get('/tempSession', tempSession.view);
app.get('/editActivity', editActivity.view);
app.get('/contacts', contacts.view);
app.get('/apps', apps.view);
app.get('/blockednotifications', blockednotifications.view);
app.get('/addAct', addAct.addActivity);
app.get('/editActivity2', editActivity2.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
