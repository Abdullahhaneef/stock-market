
/*
 * HTML5 geolocation() is for location only
 */
var demo = document.getElementById('demo');
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        demo.innerHTML = "Sorry, Geolocation is not supported by this browser.";
    }
}
;
getLocation();

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;


    //myURL = "https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat;
    StockInfo = "https://api.iextrading.com/1.0/stock/msft/batch?types=quote";
    stockLogo = "https://api.iextrading.com/1.0/stock/msft/logo";
 



// Stock Logo
    $.get(stockLogo, function (data) {
        $(".logo").attr('src', data.url);
    });

// Stock Info
    $.get(StockInfo, function (data) {

        //var symbol = document.getElementsByClassName("symbol");
        //symbol[0].innerHTML = data.quote.symbol + " - ";
        $(".symbol").html(data.quote.symbol + " - ");
        $(".companyName").html(data.quote.companyName);
        $(".sector").html(data.quote.sector);
        $(".latestPrice").html(data.quote.latestPrice);


        // Change to green or red based on the price change
        var change = data.quote.change;
        if (change > 0) {
            document.getElementById('change').innerHTML = "+" + change;
        } else {
            document.getElementById('change').innerHTML = "" + change;
            var elementGreen = document.getElementById('change');
            elementGreen.className -= " btn-success";
            elementGreen.className += " btn-danger";
        }

        // My Private number of shares
        var numberShares = 9;
        var price = data.quote.latestPrice;
        var total = Math.round(numberShares * price);
        var numberSharesV = document.getElementsByClassName('numberShares');
        numberSharesV[0].innerHTML = "Number of Shares: " + numberShares;
        var totalPriceV = document.getElementsByClassName('totalPrice');
        totalPriceV[0].innerHTML = total;
    });
};

