// 'use strict';

// make `.jsx` file requirable by node
require('babel-core/register')({});


var path = require('path');
var express = require('express');
var renderer = require('react-engine');

var app = express();

// create the view engine with `react-engine`
var engine = renderer.server.create({
  routes: require(path.join(__dirname + '/public/routes.jsx')),
  routesFilePath: path.join(__dirname + '/public/routes.jsx') // optional, enables live reloading of React routes and components
});

// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', __dirname + '/public/views');

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', renderer.expressView);

//expose public folder as static assets
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render(req.url, {
    title: 'NYT Article Search | React',
    name: 'Eric Andre'
  });
});

// 404 template
app.use(function(req, res) {
  res.render('/404', {
    title: '404 - Content Missing',
    url: req.url
  });
});

var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
