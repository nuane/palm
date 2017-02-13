var express = require('express');
var app = express();

var port = process.env.PORT || 7566;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function(){
	console.log('app on da port of ports on: ' + port);
});
