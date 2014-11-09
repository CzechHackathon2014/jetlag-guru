var http = require('http');
var path = require('path');

var express = require('express');
var router = express();
var server = http.createServer(router);

var airports = require("./airports.json");
//var agony = require("./more_agony.js");

router.use(express.static(path.resolve(__dirname, 'client')));

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

function parseTime(timeStr, dt) {
    if (!dt) {
        dt = new Date();
    }
 
    var time = timeStr.match(/(\d+)(?::(\d\d))?\s*(p?)/i);
    if (!time) {
        return NaN;
    }
    var hours = parseInt(time[1], 10);
    if (hours == 12 && !time[3]) {
        hours = 0;
    }
    else {
        hours += (hours < 12 && time[3]) ? 12 : 0;
    }
 
    dt.setHours(hours);
    dt.setMinutes(parseInt(time[2], 10) || 0);
    dt.setSeconds(0, 0);
    return dt;
}

router.get('/calculateSchedule', function(req, res) {
    console.log("calculateSchedule GET received");
   // console.log(JSON.stringify(req.query, null, "\t"));//var ucQuery = req.query.search.toUpperCase();


    var flight = {
            dep_time : req.query.departureTime,
            arr_time : req.query.arrivalTime,
            dep_name : req.query.departureFrom,
            arr_name : req.query.arrivalTo,
            sleep_length : req.query.usualSleepLength,
            sleep_time : req.query.usualSleepTime
    };
    var err;
    //console.log(JSON.stringify(flight, null, "\t"));
    if (!isNaN(parseTime(flight.dep_time))) {
        flight.dep_time = parseTime(flight.dep_time).getHours() + (parseTime(flight.dep_time).getMinutes() > 30 ? 1 : 0);
    } else {
        err = "invalid dep time"
    }

    if (!isNaN(parseTime(flight.arr_time))) {
        flight.arr_time = parseTime(flight.arr_time).getHours() + (parseTime(flight.arr_time).getMinutes() > 30 ? 1 : 0);
    } else {
        err = "invalid arr time"
    }

    if (!isNaN(parseTime(flight.sleep_time))) {
        flight.sleep_time = parseTime(flight.sleep_time).getHours() + (parseTime(flight.sleep_time).getMinutes() > 30 ? 1 : 0);
    } else {
        err = "invalid sleep time"
    }
    
    flight.dep_airp = airports[flight.dep_name.substring(0,3)];
    if (!flight.dep_airp) err = "dep airport not found";
    
    flight.arr_airp = airports[flight.arr_name.substring(0,3)];
    if (!flight.dep_airp) err = "arr airport not found";

    if (!isNaN(parseFloat(flight.arr_time)) && isFinite(flight.arr_time)) {
        flight.arr_time = Math.round(parseFloat(flight.arr_time));
    } else {
        err = "arr time is NaN";
    }
    
    if (!isNaN(parseFloat(flight.dep_time)) && isFinite(flight.dep_time)) {
        flight.dep_time = Math.round(parseFloat(flight.dep_time));
    } else {
        err = "dep time is NaN";
    }
    if (!isNaN(parseFloat(flight.sleep_length)) && isFinite(flight.sleep_length)) {
        flight.rspn = Math.round(parseFloat(flight.sleep_length));
    } else {
        err = "sleep_length is NaN";
    }

    if (!isNaN(parseFloat(flight.sleep_time)) && isFinite(flight.sleep_time)) {
        flight.normal_wake_hour = Math.round(parseFloat(flight.sleep_time));
    } else {
        err = "sleep_time is NaN";
    }
    
    if (!err) {
        console.log("calculateSchedule input validated");
        flight.tz_diff = flight.dep_airp[2] - flight.arr_airp[2];
        /*
        var flight = {
            dep_time : 21, //flight departs at 20:50 local, rounded to 21:00 
            arr_time : 11, //flight arrives at 11:00 local
            tz_diff : -6, // flying eastbound (hard) with 6 hour time difference
            rspn : 7, // I need 7 hours of sleep per night
            normal_wake_hour : 6 // 6am
        };*/
        console.log("calculateSchedule calc start");
        calc_agony(flight);
        console.log("calculateSchedule calc end");
        for (var solution_number = 0; solution_number < flight.solutions.length; solution_number++) {
            if (flight.solutions[solution_number].agony > flight.least_agony) {
                flight.solutions[solution_number].days = undefined;
            }
        }
        var flight2 = JSON.parse(JSON.stringify(flight));
        for (var solution_number = 0; solution_number < flight2.solutions.length; solution_number++) {
            if (flight2.solutions[solution_number].days) flight2.solutions[solution_number].days = "[removed]";
        }
        //flight2.solutions = "[REMOVED]";
        //console.log(JSON.stringify(flight2, null, "\t"));
        //console.log(JSON.stringify(flight, null, "\t"));
        res.json(flight);
    }
    else
    {
        res.json({ err: err});
        console.log(err);
    }
        
    });


// supports IATA codes
router.get('/airportSearch', function(req, res){  
  if(req.query.search != null)
  {
    var test = airports[0];
    var ucQuery = req.query.search.toUpperCase();

    var airportDetailsList=[];
    var airportsFound=[];
    
    if(airports[ucQuery]){
        var airport = airports[ucQuery];
        airport[4] = ucQuery; //IATA
        airportsFound.push(airport);
    }
    
    for (var property in airports) {
        if (airports.hasOwnProperty(property)) {
            airport = airports[property];
            airport[4] = property;  //IATA
            var airportName = airport[0];
            var cityName = airport[1];
            
            if(airportName.toUpperCase().indexOf(ucQuery)>-1){
                airportsFound.push(airport);
            }
            if(cityName.toUpperCase().indexOf(ucQuery)>-1){
                airportsFound.push(airport);
            }
        }
    }
    
    if(airportsFound != null){
    	
    	for (var i = 0; i < airportsFound.length; i++) {
    	    var airportFound = airportsFound[i];
        	var airportDetails = {
        		IATA : 	airportFound[4],
        		TimeZone : airportFound[2],
        		Name : airportFound[0],
        		City : airportFound[1]
        	};
        	
            airportDetailsList.push(airportDetails);
    	}
    }
    
	res.json(airportDetailsList);
    
  }
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");

function get_agony(fl, day_length, dia)
{
    var _agony = 0;
    var traveler_bio_wake_hour = fl.normal_wake_hour;
    var days = [];
    // days are wrt dep tz
    // day 0 is the day you land
    var landing_hour = fl.arr_time + fl.tz_diff;
    if (landing_hour > 23) landing_hour -= 24;
    if (landing_hour < 0) landing_hour += 24;
    var flight_length = landing_hour - fl.dep_time;
    if (flight_length < 0) flight_length += 24;
    
    var prev_day;
    for (var day_number = -dia; day_number <= -dia - fl.tz_diff; day_number++){
        var bedTime = 0;
		if(traveler_bio_wake_hour >= fl.rspn) bedTime = traveler_bio_wake_hour - fl.rspn;
		else{
			bedTime = 24 + (traveler_bio_wake_hour - fl.rspn);
		}
		
        var day = { "t-minus": day_number, bio_wake_hour: traveler_bio_wake_hour, hours: [], agony : 0 };
        days.push(day);
		var ntbaForLanding = 0;
        for (var hour_number = 0; hour_number < 24; hour_number++) {
            var overnight = (fl.dep_time > fl.arr_time);
            var hour = { hour_number: hour_number,
                dep_tz_night: false,
                arr_tz_night: false,
                inflight: false, 
                want_to_be_asleep: false,
                need_to_be_awake: false,
                _agony: 0 };
                
            day.hours.push(hour);
            prev_day = days[days.length - 2];
            if (day_number === 0) { // landing day
                if (hour_number == landing_hour + 2) {
                  day.hours[hour_number].need_to_be_awake = true;
                  for (var loop_hour = landing_hour; loop_hour < landing_hour + 2; loop_hour++) {
				    if (loop_hour < 0 ) {
				        if (prev_day && prev_day.hours[loop_hour + 24]) { prev_day.hours[loop_hour + 24].need_to_be_awake = true; }
				    } else {
				        if(day && day.hours[loop_hour]) { day.hours[loop_hour].need_to_be_awake = true; }
				    }
				  }
                  for (loop_hour = landing_hour - flight_length - 2; loop_hour < landing_hour - flight_length + 1; loop_hour++) {
				    if (loop_hour < 0 ) {
				        if(prev_day && prev_day.hours[loop_hour + 24]) { prev_day.hours[loop_hour + 24].need_to_be_awake = true; }
				    } else {
				        if(day && day.hours[loop_hour]) { day.hours[loop_hour].need_to_be_awake = true; }
                  
				    }
			      }
                  for (loop_hour = landing_hour - flight_length; loop_hour <= landing_hour; loop_hour++) {
				    if (loop_hour < 0 ) {
				        if (prev_day && prev_day.hours[loop_hour + 24]) { prev_day.hours[loop_hour + 24].inflight = true; }
				    } else {
				        if(day && day.hours[loop_hour]) { day.hours[loop_hour].inflight = true; }
				    }
				        
				  }
                }
            }
			/*	
            if (fl.dep_time < fl.arr_time) { // flight lands same day
                hour.inflight = day_number === 0 && hour_number >= fl.dep_time && hour_number <= fl.arr_time;
				
				if(day_number === 0 && hour_number == fl.arr_time) { 
					hour.need_to_be_awake = true; 
					ntbaForLanding = 2;
				}
            }
            else {
                hour.inflight = (day_number === -1 && hour_number >= fl.dep_time) ||
                    (day_number === 0 && hour_number <= fl.arr_time);
					
				if(day_number === 0 &&  hour_number == fl.arr_time) { 
					ntbaForLanding = 2;
					hour.need_to_be_awake = true; 
				}
            }
			
			// NTBA for takeoff
			if((!overnight && day_number === 0 && hour_number == fl.dep_time) ||
				(overnight && day_number === -1 && hour_number == fl.dep_time)
				)
			{
			

				// get this and the previous 2 hours and set them to NTBA
				hour.need_to_be_awake = true;
				if(day.hours.length >= 2){
					day.hours[day.hours.length - 1].need_to_be_awake = true;
					day.hours[day.hours.length - 2].need_to_be_awake = true;
				}
			}
			
			// NTBA for landing
			if(ntbaForLanding > 0)
			{
				hour.need_to_be_awake = true;
				ntbaForLanding--;
			}
            */
            var want_to_be_asleep;
            var acrossMidnight = bedTime > traveler_bio_wake_hour;
			if(acrossMidnight)
			{
				want_to_be_asleep = hour_number >= bedTime || hour_number < traveler_bio_wake_hour;
			}
			else
			{
				want_to_be_asleep = hour_number >= bedTime && hour_number < traveler_bio_wake_hour;
			}
			hour.want_to_be_asleep = want_to_be_asleep;
			
			if (hour.want_to_be_asleep && hour.need_to_be_awake) {
                hour._agony += 10;
            }
            if (hour.want_to_be_asleep && hour.inflight && !hour.need_to_be_awake) {
                hour._agony += 5;
            }
            
			day.agony += hour._agony;
        }
        traveler_bio_wake_hour += (day_length - 24);
		_agony += day.agony;
		prev_day = day;
    }
    days.reverse();
	     
    return {
        day_length: day_length,
        dia: dia,
        days: days,
		agony: _agony
    };
}

function calc_agony(flight) {
    flight.direction = (flight.tz_diff > 0) ? 1 : -1; // positive is westbound (easy)
    flight.solutions = [ ];
    
    for (var days_in_advance = 0; days_in_advance <= flight.direction * flight.tz_diff; days_in_advance++) {
        flight.solutions.push(get_agony(flight, 23, days_in_advance)); // 23h days
        flight.solutions.push(get_agony(flight, 26, days_in_advance)); // 26h days
    }
    
    flight.least_agony = 0;
    
    for (var solution_number = 0; solution_number < flight.solutions.length; solution_number++) {
        var solution = flight.solutions[solution_number];
        if (flight.least_agony === 0 || solution.agony < flight.least_agony) {
            flight.least_agony = solution.agony;
        }
    }
}