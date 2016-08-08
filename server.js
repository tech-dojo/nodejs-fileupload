var express = require('express');
var route = require('./route.js');
var fileUpload = require('express-fileupload');
var app = express();
app.use(express.static('files'));
app.use(fileUpload());
app.set('view engine', 'ejs');
app.use('/files', express.static(__dirname + '/files'));
route(app)
app.listen(process.env.PORT||3000);
