
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


    for(i=0;i<3;i++){
    //myURL = "https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat;
        console.log(i)
        if (i == 0){
            StockInfo = "https://api.iextrading.com/1.0/stock/msft/batch?types=quote";
            stockLogo = "https://api.iextrading.com/1.0/stock/msft/logo";

        }
        else if(i == 1){     
            StockInfo = "https://api.iextrading.com/1.0/stock/aapl/batch?types=quote";
            stockLogo = "https://api.iextrading.com/1.0/stock/aapl/logo";
        }
        else{
            StockInfo = "https://api.iextrading.com/1.0/stock/ebay/batch?types=quote";
            stockLogo = "https://api.iextrading.com/1.0/stock/ebay/logo";     
        };

        $.ajax({
            url: StockInfo,
            type: 'GET',
            beforeSend: function() {
                console.log("Downloading ");
            },
            async: false,
            complete: function() {
            },
            success: function(data) {
                console.log(data);
                $(".logo_"+i).attr('src', data.url);
                $(".symbol_"+i).html(data.quote.symbol + " - ");
                $(".companyName_"+i).html(data.quote.companyName);
                $(".sector_"+i).html(data.quote.sector);
                $(".latestPrice_"+i).html(data.quote.latestPrice);


                // Change to green or red based on the price change
                var change = data.quote.change;
                if (change > 0) {
                    document.getElementById('change_'+i).innerHTML = "+" + change;
                } else {
                    document.getElementById('change_'+i).innerHTML = "" + change;
                    var elementGreen = document.getElementById('change_'+i);
                    elementGreen.className -= " btn-success";
                    elementGreen.className += " btn-danger";
                }

                // My Private number of shares
                var numberShares = 9;
                var price = data.quote.latestPrice;
                var total = Math.round(numberShares * price);
                var numberSharesV = document.getElementsByClassName('numberShares_'+i);
                numberSharesV[0].innerHTML = "Number of Shares: " + numberShares;
                var totalPriceV = document.getElementsByClassName('totalPrice_'+i);
                totalPriceV[0].innerHTML = total;                
            }
        });

        $.ajax({
            url: stockLogo,
            type: 'GET',
            beforeSend: function() {
                console.log("Downloading ");
            },
            async: false,
            complete: function() {
            },
            success: function(data_logo) {
                $(".logo_"+i).attr('src', data_logo.url);

            }
        });
    };
};

