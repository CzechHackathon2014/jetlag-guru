//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');

var airports = require("./airports.json");

var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

router.get('/test', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

router.get('/airportSearch', function(req, res){  
  if(req.query.search != null)
  {
    var airport = airports[req.query.search.toUpperCase()]; //IATA case
    if(airport != null){
    	
    	var airportDetails = {
    		IATA : 	req.query.search.toUpperCase(),
    		TimeZone : airport[2],
    		Name : airport[0],
    		City : airport[1]
    	};
    	
    	res.json(airportDetails);
    }
  }
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
