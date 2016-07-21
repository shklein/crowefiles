var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


// modules
var data = require('./routes/data')
var index = require('./routes/index');




// middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// express routes
app.use('/data', data);
app.use('/', index);


// start server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('listening on port ', app.get('port'));
});
