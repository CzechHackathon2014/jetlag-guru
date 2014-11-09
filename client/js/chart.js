
function drawChart(data) {
    var result = "";
    var solutionNr=0;
    result+="<div id='accordion' class='panel-group'>";
    for (var j = 0; j < data.solutions.length; j++) {
        if (data.solutions[j].days) {
            solutionNr++;
            var table="";
            table += "<div class='panel panel-default'>";
            table += "<div class='panel-heading'>";
            table += "<h4 class='panel-title'>";
            table += "<a data-toggle='collapse' data-parent='#accordion' href='#collapse" + solutionNr+"'>";
            table += "Solution " + solutionNr;
            table += "</a></h4></div>";
            table += "<div id='collapse"+solutionNr+"' class='panel-collapse collapse "+(solutionNr==1?"in":"")+"'>";
            table += "<div class='panel-body'>";        
            table += "<table class='table table-compact table-bordered'>";
            table += "<thead><tr><th>Flight</th><th style='max-width: 100px;'>Departure TZ</th><th>Must be awake</th><th style='max-width: 100px;'>Arrival TZ</th><th>Sleep schedule</th></tr></thead>"
            table += "<tbody>";

            for (var i = 0; i < data.solutions[j].days.length; i++) {
                for (var k = 0; k < data.solutions[j].days[i].hours.length; k++) {
                    table += addRow(data.solutions[j].days[i].hours[k], data.tz_diff);   
                }
            }
            table += "</tbody>";
            table += "</table>";
            table += "</div>";
            table += "</div>";
            table += "</div>";
            result += table;
        }
    }
    result+="</div>";
    return result;
}

function addRow(line, shift) {
    return "<tr>" +
        flightCell(line) +
        departureZoneCell(line) +
        awakeCell(line) +
        arrivalZoneCell(line, shift) +
        // noteCell(line) +
        travelerClockCell(line) +
        // sunCell(line) +
        // earlyLateCell(line) +
        // adviceCell(line) +
        "</tr>";
}

function isNight(hour) {
    return hour >= 20 || hour <= 6;
}

function departureZoneCell(line) {
    return time(line.hour_number);
}

function awakeCell(line) {
    if (line.need_to_be_awake) {
        return cell("awake", "Awake");
    }
    else {
        return emptyCell();
    }
}

function arrivalZoneCell(line, shift) {
    var arrivalHour = line.hour_number - shift;
    arrivalHour = (arrivalHour + 24) % 24;
    return time(arrivalHour);
}

function time(hour) {
    return cell("time" + (isNight(hour) ? " night" : ""), ("00" + hour).slice(-2) + ":00");
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
    if (!line.need_to_be_awake && line.want_to_be_asleep) {
        return cell("sleep", "Sleep");
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
        return cell("flight", "<i class='glyphicon glyphicon-plane'></i>");
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