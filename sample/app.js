
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , alice = require('./routes/alice')
  , rest = require('./routes/rest')
  , http = require('http')
  , path = require('path');

module.exports.app = app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.multipart());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/alice', alice.list);

// rest API
app.post('/rest', rest.post);
app.get('/rest', rest.get);
app.get('/rest/:name/:address', rest.get);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
