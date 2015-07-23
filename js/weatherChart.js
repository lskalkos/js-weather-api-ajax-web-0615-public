function makeAjaxRequest(url, callback) {
    $.ajax({
        url: url,
        dataType: 'jsonp',
        success: callback

    })
}

function getHours(json) {
    return json.hourly_forecast.map(function(forecast){
        return forecast.FCTTIME.hour;
    })
}

function getFarenheits(json) {
    return json.hourly_forecast.map(function(forecast){
        return forecast.temp.english;
    })
}

function generateDataSet(hours, farenheits){

    return {
        labels: hours,
        datasets: [
            {
                label: "Hourly Weather for New York",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: farenheits
            }
        ]
    };

}