var express = require('express');
var morgan = require('morgan');
var app = express();

var logger = morgan('combined');

app.use(logger);

/**
 * GET /hello
 */
app.get('/hello', function (req, res) {

    // Grab the name from the query parameter if it exists. Default to 'World'
    var name = req.query.name || 'World';

    res.send('Hello, ' + name + '! Updated with rolling update!');
});

/**
 * Start the server.
 */
app.listen(3000, function () {

    console.log('Hello server listening on port 3000!');
});
