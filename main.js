class CoinPrices {
    constructor() {
        const coins  = ['BTC', 'BCH', 'ETH', 'LTC'];
        const gsxID  = '1q0dLorKke1HMD22mkZztuavFCYDKLIzU7VrBGmL6oRQ';
        const gsxURL = `https://spreadsheets.google.com/feeds/list/${gsxID}/default/public/values?alt=json`;

        coins.forEach( coinType => {
            const url = 'https://api.coinbase.com/v2/prices/' + coinType + '-USD/sell'
            fetchJSON(url, (json => console.log(coinType, json)) );
        });

        fetchJSON(gsxURL, (json => console.log(json.feed.entry)) );

        function fetchJSON(url, JSONCallback) {
            fetch(url).then( data => data.json() ).then( JSONCallback );
        }
    }
}

new CoinPrices();