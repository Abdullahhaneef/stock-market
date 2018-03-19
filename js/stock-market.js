
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
    msftStockInfo = "https://api.iextrading.com/1.0/stock/msft/batch?types=quote";
    msftstockLogo = "https://api.iextrading.com/1.0/stock/msft/logo";
 
    appleStockInfo = "https://api.iextrading.com/1.0/stock/aapl/batch?types=quote";
    applestockLogo = "https://api.iextrading.com/1.0/stock/aapl/logo";

    ebayStockInfo = "https://api.iextrading.com/1.0/stock/ebay/batch?types=quote";
    ebaystockLogo = "https://api.iextrading.com/1.0/stock/ebay/logo";     



// Microsoft Stock Logo
    $.get(msftstockLogo, function (data) {
        $(".logo_msft").attr('src', data.url);
    });

// Microsoft Stock Info
    $.get(msftStockInfo, function (data) {

        //var symbol = document.getElementsByClassName("symbol");
        //symbol[0].innerHTML = data.quote.symbol + " - ";
        $(".symbol_msft").html(data.quote.symbol + " - ");
        $(".companyName_msft").html(data.quote.companyName);
        $(".sector_msft").html(data.quote.sector);
        $(".latestPrice_msft").html(data.quote.latestPrice);


        // Change to green or red based on the price change
        var change = data.quote.change;
        if (change > 0) {
            document.getElementById('change_msft').innerHTML = "+" + change;
        } else {
            document.getElementById('change_msft').innerHTML = "" + change;
            var elementGreen = document.getElementById('change_msft');
            elementGreen.className -= " btn-success";
            elementGreen.className += " btn-danger";
        }

        // My Private number of shares
        var numberShares = 9;
        var price = data.quote.latestPrice;
        var total = Math.round(numberShares * price);
        var numberSharesV = document.getElementsByClassName('numberShares_msft');
        numberSharesV[0].innerHTML = "Number of Shares: " + numberShares;
        var totalPriceV = document.getElementsByClassName('totalPrice_msft');
        totalPriceV[0].innerHTML = total;
    });

// apple Stock Logo
    $.get(applestockLogo, function (data) {
        $(".logo_apple").attr('src', data.url);
    });

// apple Stock Info
    $.get(appleStockInfo, function (data) {

        //var symbol = document.getElementsByClassName("symbol");
        //symbol[0].innerHTML = data.quote.symbol + " - ";
        $(".symbol_apple").html(data.quote.symbol + " - ");
        $(".companyName_apple").html(data.quote.companyName);
        $(".sector_apple").html(data.quote.sector);
        $(".latestPrice_apple").html(data.quote.latestPrice);


        // Change to green or red based on the price change
        var change = data.quote.change;
        if (change > 0) {
            document.getElementById('change_apple').innerHTML = "+" + change;
        } else {
            document.getElementById('change_apple').innerHTML = "" + change;
            var elementGreen = document.getElementById('change_apple');
            elementGreen.className -= " btn-success";
            elementGreen.className += " btn-danger";
        }

        // My Private number of shares
        var numberShares = 9;
        var price = data.quote.latestPrice;
        var total = Math.round(numberShares * price);
        var numberSharesV = document.getElementsByClassName('numberShares_apple');
        numberSharesV[0].innerHTML = "Number of Shares: " + numberShares;
        var totalPriceV = document.getElementsByClassName('totalPrice_apple');
        totalPriceV[0].innerHTML = total;

    });

// ebay Stock Logo
    $.get(ebaystockLogo, function (data) {
        $(".logo_ebay").attr('src', data.url);
    });

// ebay Stock Info
    $.get(ebayStockInfo, function (data) {

        //var symbol = document.getElementsByClassName("symbol");
        //symbol[0].innerHTML = data.quote.symbol + " - ";
        $(".symbol_ebay").html(data.quote.symbol + " - ");
        $(".companyName_ebay").html(data.quote.companyName);
        $(".sector_ebay").html(data.quote.sector);
        $(".latestPrice_ebay").html(data.quote.latestPrice);


        // Change to green or red based on the price change
        var change = data.quote.change;
        if (change > 0) {
            document.getElementById('change_ebay').innerHTML = "+" + change;
        } else {
            document.getElementById('change_ebay').innerHTML = "" + change;
            var elementGreen = document.getElementById('change_ebay');
            elementGreen.className -= " btn-success";
            elementGreen.className += " btn-danger";
        }

        // My Private number of shares
        var numberShares = 9;
        var price = data.quote.latestPrice;
        var total = Math.round(numberShares * price);
        var numberSharesV = document.getElementsByClassName('numberShares_ebay');
        numberSharesV[0].innerHTML = "Number of Shares: " + numberShares;
        var totalPriceV = document.getElementsByClassName('totalPrice_ebay');
        totalPriceV[0].innerHTML = total;

    });    

};

