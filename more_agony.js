#!/usr/bin/env node





function get_agony(fl, day_length, dia)
{
    var _agony = 0;
    var traveler_bio_wake_hour = fl.normal_wake_hour;
    var days = [];
    for (var day_number = -dia; day_number <= -dia - fl.tz_diff; day_number++){
        var bedTime = 0;
		if(traveler_bio_wake_hour >= flight.rspn) bedTime = traveler_bio_wake_hour - flight.rspn;
		else{
			bedTime = 24 + (traveler_bio_wake_hour - flight.rspn);
		}
		
        var day = { "t-minus": day_number, bio_wake_hour: traveler_bio_wake_hour, hours: [], agony : 0 };
        days.push(day);
		var ntbaForLanding = 0;
        for (var hour_number = 0; hour_number < 24; hour_number++) {
            
            var hour = { hour_number: hour_number,
                dep_tz_night: false,
                arr_tz_night: false,
                inflight: false, 
                want_to_be_asleep: false,
                need_to_be_awake: false,
                _agony: 0 };
				
            if (fl.dep_time < fl.arr_time) { // flight lands same day
                hour.inflight = day_number === 0 && hour_number >= fl.dep_time && hour_number <= fl.arr_time;
				
				if(hour_number == fl.arr_time) { 
					hour.need_to_be_awake = true; 
					ntbaForLanding = 2;
				}
            }
            else {
                hour.inflight = (day_number == -1 && hour_number >= fl.dep_time) ||
                    (day_number == 0 && hour_number <= fl.arr_time);
					
				if(day_number == 0 &&  hour_number == fl.arr_time) { 
					ntbaForLanding = 2;
					hour.need_to_be_awake = true; 
				}
            }
			
			// NTBA for takeoff
			if((fl.dep_time < fl.arr_time && day_number == 0 && hour_number == fl.dep_time) ||
				(fl.dep_time > fl.arr_time && day_number == -1 && hour_number == fl.dep_time)
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
            
            day.hours.push(hour);
			day.agony += hour._agony;
        }
        traveler_bio_wake_hour += (day_length - 24);
		_agony += day.agony;
    }
	     
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
    
    console.log(JSON.stringify(flight, null, 2));
}