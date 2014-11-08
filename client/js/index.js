$(function () {

    $('#btnSearch').on("click",function (e) {
        
        var departureTime = $("#departureTime").val();
        var departureFrom = $("#departureFrom").val();
        var arrivalTime = $("#arrivalTime").val();
        var arrivalTo = $("#arrivalTo").val();
        
        loadSchedule(departureTime, departureFrom, arrivalTime, arrivalTo);

    });

    function loadSchedule(departureTime, departureFrom, arrivalTime, arrivalTo) {

        var query = {departureTime:departureTime, departureFrom:departureFrom, arrivalTime:arrivalTime, arrivalTo:arrivalTo};

        $("#schedule").html("");

        $.get("calculateSchedule", query
        ).success(function (data, textStatus) {

            // $.each(data, function(idx, obj) {
	            
	           // var text = obj.text;
	            
	            
            // });


            // $("#schedule").html(data);
            
            drawChart()

        }).error(function (data, textStatus) {
            alert("error");

        });
    };
    
    function drawChart() {
      var container = document.getElementById('schedule');
      var chart = new google.visualization.Timeline(container);
      var dataTable = new google.visualization.DataTable();
      dataTable.addColumn({ type: 'string', id: 'Room' });
      dataTable.addColumn({ type: 'string', id: 'Name' });
      dataTable.addColumn({ type: 'date', id: 'Start' });
      dataTable.addColumn({ type: 'date', id: 'End' });
      dataTable.addRows([
        [ 'Magnolia Room',  'CSS Fundamentals',    new Date(0,0,0,12,0,0),  new Date(0,0,0,14,0,0) ],
        [ 'Magnolia Room',  'Intro JavaScript',    new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
        [ 'Magnolia Room',  'Advanced JavaScript', new Date(0,0,0,16,30,0), new Date(0,0,0,19,0,0) ],
        [ 'Gladiolus Room', 'Intermediate Perl',   new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0) ],
        [ 'Gladiolus Room', 'Advanced Perl',       new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
        [ 'Gladiolus Room', 'Applied Perl',        new Date(0,0,0,16,30,0), new Date(0,0,0,18,0,0) ],
        [ 'Petunia Room',   'Google Charts',       new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0) ],
        [ 'Petunia Room',   'Closure',             new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
        [ 'Petunia Room',   'App Engine',          new Date(0,0,0,16,30,0), new Date(0,0,0,18,30,0) ]]);
    
      var options = {
        timeline: { colorByRowLabel: true },
        backgroundColor: '#ffd'
      };
    
      chart.draw(dataTable, options);
    };
    
});