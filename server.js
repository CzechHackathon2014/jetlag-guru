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
    var data = {
      "dep_time": 21,
      "arr_time": 11,
      "tz_diff": -1,
      "rspn": 7,
      "normal_wake_hour": 6,
      "direction": -1,
      "solutions": [
        {
          "day_length": 23,
          "dia": 0,
          "agony": 0,
          "days": [
            {
              "t-minus": 0,
              "bio_wake_hour": 6,
              "hours": [
                {
                  "hour_number": 0,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 1,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 2,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 3,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 4,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 5,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 6,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 7,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 8,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 9,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 10,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 11,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 12,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 13,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 14,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 15,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 16,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 17,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 18,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 19,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 20,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 21,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": true,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 22,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": true,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 23,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": true,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                }
              ]
            }
          ]
        },
        {
          "day_length": 26,
          "dia": 0,
          "agony": 0,
          "days": [
            {
              "t-minus": 0,
              "bio_wake_hour": 6,
              "hours": [
                {
                  "hour_number": 0,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 1,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 2,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 3,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 4,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 5,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 6,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 7,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 8,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 9,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 10,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 11,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 12,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 13,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 14,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 15,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 16,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 17,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 18,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 19,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 20,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 21,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": true,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 22,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": true,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 23,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": true,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                }
              ]
            }
          ]
        },
        {
          "day_length": 23,
          "dia": 1,
          "agony": 0,
          "days": [
            {
              "t-minus": -1,
              "bio_wake_hour": 6,
              "hours": [
                {
                  "hour_number": 0,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 1,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 2,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 3,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 4,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 5,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 6,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 7,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 8,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 9,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 10,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 11,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 12,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 13,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 14,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 15,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 16,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 17,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 18,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 19,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 20,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 21,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 22,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 23,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                }
              ]
            }
          ]
        },
        {
          "day_length": 26,
          "dia": 1,
          "agony": 0,
          "days": [
            {
              "t-minus": -1,
              "bio_wake_hour": 6,
              "hours": [
                {
                  "hour_number": 0,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 1,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 2,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 3,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 4,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 5,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 6,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 7,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 8,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 9,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 10,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 11,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 12,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 13,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 14,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 15,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 16,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 17,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 18,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 19,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 20,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 21,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 22,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": false,
                  "need_to_be_awake": false,
                  "_agony": 0
                },
                {
                  "hour_number": 23,
                  "dep_tz_night": false,
                  "arr_tz_night": false,
                  "inflight": false,
                  "want_to_be_asleep": true,
                  "need_to_be_awake": false,
                  "_agony": 0
                }
              ]
            }
          ]
        }
      ],
      "least_agony": 0
    };

    res.json(data);
});

router.post('/test', function(req, res){
  var email = req.param('email', null);  // second parameter is default
  res.send("ahoj");
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
            var airport = airports[property];
            airport[4] = property;  //IATA
            var airportName = airport[0];
            var cityName = airport[1];
            
            if(airportName.indexOf(ucQuery)>-1){
                airportsFound.push(airport);
            }
            if(cityName.indexOf(ucQuery)>-1){
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

