var express = require("express");
var app = require('express')();
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000 
 
app.use(fileUpload());
 

 
mongoose.connect('mongodb://localhost:27017/population',{ useNewUrlParser: true });

//Route
require('./app/routes/population.route')(app)
 
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

 
//var template = require('./template.js');
//app.get('/template', template.get);
 
var upload = require('./upload.js');
app.post('/', upload.post);

app.listen(port,()=>{
  console.log(`Connect port ${port}`)
})