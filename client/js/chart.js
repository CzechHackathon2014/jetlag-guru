
function drawChart(data) {
    var result = "";
    for (var j = 0; j < data.solutions.length; j++) {
        var table = "<table class='table table-condensed'>";
        
        for (var i = 0; i < data.solutions[j].days.length; i++) {
            for (var k = 0; k < data.solutions[j].days[i].hours.length; k++) {
                table += addRow(data.solutions[j].days[i].hours[k], data.tz_diff);   
            }
        }
        
        table += "</table>";
        result += table;
    }
    return result;
}

function addRow(line, shift) {
    return "<tr>" +
        flightCell(line) +
        departureZoneCell(line) +
        awakeCell(line) +
        arrivalZoneCell(line, shift) +
        // noteCell(line) +
        // travelerClockCell(line) +
        // sunCell(line) +
        // earlyLateCell(line) +
        // adviceCell(line) +
        "</tr>";
}

function departureZoneCell(line) {
    return time(line.hour_number, line.dep_tz_night);
}

function awakeCell(line) {
    if (line.nee) {
        return cell("awake", "NTBA");
    }
    else {
        return emptyCell();
    }
}

function arrivalZoneCell(line, shift) {
    var arrivalHour = line.hour_number + shift;
    arrivalHour %= 24;
    return time(arrivalHour, line.arr_tz_night);
}

function time(hour, isNight) {
    return cell("time" + isNight ? " night" : "", ("00" + hour).slice(-2) + ":00");
}

function noteCell(line) {
    if (line.note) {
        return cell("note", line.note);
    }
    else {
        return emptyCell();
    }
}

function earlyLateCell(line) {
    if (line.earlyLate) {
        return cell("early-late", line.earlyLate);
    }
    else {
        return emptyCell();
    }
}

function sunCell(line) {
    if (line.sun) {
        return cell("sun", line.sun);
    }
    else {
        return emptyCell();
    }
}

function travelerClockCell(line) {
    if (line.travelerClock) {
        return cell("flight", "Flight");
    }
    else {
        return emptyCell();
    }
}

function adviceCell(line) {
    if (line.advice) {
        return cell("advice", line.advice);
    }
    else {
        return emptyCell();
    }
}

function flightCell(line) {
    if (line.inflight) {
        return cell("flight", "Flight");
    }
    else {
        return emptyCell();
    }
}

function emptyCell() {
    return cell("empty", "&nbsp;");
}

function cell(cls, text) {
    return "<td class='" + cls + "'>" + text + "</td>";
}