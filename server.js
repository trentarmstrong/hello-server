var express = require('express');
var morgan = require('morgan');
var app = express();

var logger = morgan('combined');

app.use(logger);

app.get('/hello', function (req, res) {

    var name = req.query.name || 'World';
    res.send('Hello, ' + name + '!');
});

app.listen(3000, function () {
    
    console.log('Hello server listening on port 3000!');
});
