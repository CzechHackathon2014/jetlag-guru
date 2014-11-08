$(function () {

    $('#btnSearch').on("click",function (e) {
        
        var departureTime = $("#departureTime").value();
        var departureFrom = $("#deaprtureFrom").value();
        var arrivalTime = $("#arrivalTime").value();
        var arrivalTo = $("#arrivalTo").value();
        
        loadSchedule(deaprtureTime, departureFrom, arrivalTime, arrivalTo);

    });

    function loadSchedule(deaprtureTime, departureFrom, arrivalTime, arrivalTo) {

        var query = {deaprtureTime:deaprtureTime, departureFrom:departureFrom, arrivalTime:arrivalTime, arrivalTo:arrivalTo};

        $("#schedule").html("");

        $.get("search", query
        ).success(function (data, textStatus) {

            $("#schedule").html(data);

        }).error(function (data, textStatus) {
            alert("error");

        });
    };
    
});