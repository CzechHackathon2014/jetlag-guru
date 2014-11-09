$(function () {

// Instantiate the Bloodhound suggestion engine
var airports = new Bloodhound({
    datumTokenizer: function(d) {
        return Bloodhound.tokenizers.whitespace(d.val);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        url: '/airportSearch?search=%QUERY',
        filter: function (res) {
            // Map the remote source JSON array to a JavaScript array
            return $.map(res, function (singleRes) {
                return {
                    value: singleRes.IATA +" - " +  singleRes.Name+" in "+ singleRes.City + " ["+singleRes.TimeZone+"]"
                };
            });
        }
    }
});

// Initialize the Bloodhound suggestion engine
airports.initialize();

// Instantiate the Typeahead UI
$('.typeahead').typeahead(null, {
    displayKey: 'value',
    source: airports.ttAdapter()
});

});