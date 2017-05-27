"use strict"

var path = require('path');

var express = require('express');
var app = express();
const port = (process.env.PORT || 8080)

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(port, function () {
    console.log('Listening on port '+port);
})
