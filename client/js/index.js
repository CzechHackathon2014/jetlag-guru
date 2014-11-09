$(function () {

    $('#btnSearch').on("click",function (e) {
        
        var departureTime = $("#departureTime").val();
        var departureFrom = $("#departureFrom").val();
        var arrivalTime = $("#arrivalTime").val();
        var arrivalTo = $("#arrivalTo").val();
        var usualSleepLength = $("#sleepLength").val();
        var usualSleepTime = $("#sleepTime").val();
        
        loadSchedule(departureTime, departureFrom, arrivalTime, arrivalTo, usualSleepLength, usualSleepTime);
    });

    function loadSchedule(departureTime, departureFrom, arrivalTime, arrivalTo, usualSleepLength, usualSleepTime) {

        var query = {departureTime:departureTime, departureFrom:departureFrom, arrivalTime:arrivalTime, arrivalTo:arrivalTo, usualSleepLength:usualSleepLength, usualSleepTime:usualSleepTime};

        $("#schedule").html("");

        $.get("calculateSchedule", query
        ).success(function (data, textStatus) {

            // $.each(data, function(idx, obj) {
	            
	           // var text = obj.text;
	            
	            
            // });


            $("#schedule").html(drawChart(data));
            
        }).error(function (data, textStatus) {
            alert("error");

        });
    };
});