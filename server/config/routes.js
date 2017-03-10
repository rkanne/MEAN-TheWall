var path = require('path');
var users = require('./../controllers/users.js');
var walls = require('./../controllers/walls.js');
console.log('routes');

module.exports = function(app) {
	app.get('/', users.index);
  	app.post('/users', users.create);
  	app.get('/show', users.show);
  	app.post('/login', users.login);
  	app.post('/logout', users.logout);
	app.post('/register', users.register);
	app.post('/message', walls.message);
	app.post('/comment', walls.comment);
	app.get('/getmessage', walls.getmessage);
	app.get('/getcomment', walls.getcomment);
}
