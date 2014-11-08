var http = require('http');
var path = require('path');

var express = require('express');
var router = express();
var server = http.createServer(router);

var airports = require("./airports.json");

router.use(express.static(path.resolve(__dirname, 'client')));

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

router.post('/test2', function(req, res){
  var x = [ 1, 2, 3]
  res.json(x);
});

router.get('/calculateSchedule', function(req, res) {
    var events = [
        {
            timeStart: new Date(),
            timeEnd: new Date().addHours(5),
            type: "sleep",
            text: "",
            textStart: "Ideal bed time",
            textEnd: "Ideal bed time"
        },
        {
            timeStart: new Date().addHours(5),
            timeEnd: new Date().addHours(7),
            type: "travel",
            text: "",
            textStart: "Board flight",
            textEnd: "Exit"
        },
        {
            timeStart: new Date().addHours(10),
            timeEnd: new Date().addHours(12),
            type: "meeting",
            text: "Description",
            textStart: "",
            textEnd: ""
        },
        {
            timeStart: new Date().addHours(4),
            timeEnd: new Date().addHours(11),
            type: "night",
            text: "Night at destination",
            textStart: "",
            textEnd: ""
        }
    ];
    res.json(events);
});

router.post('/test', function(req, res){
  var email = req.param('email', null);  // second parameter is default
  res.send("ahoj");
});

// supports IATA codes
router.get('/airportSearch', function(req, res){  
  if(req.query.search != null)
  {
    var ucQuery = req.query.search.toUpperCase();
    var airport = airports[ucQuery]; //IATA case
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

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");
