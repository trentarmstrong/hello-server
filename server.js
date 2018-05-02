var express = require('express');
var app = express();


app.get('/', function (req, res) {
    var name = req.query.name || 'World';
    res.send('Hello ' + name + ', World!');
});

app.listen(3000, function () {
    console.log('Hello server listening on port 3000!');
});
