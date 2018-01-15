class CoinPrices {
    constructor() {
        this.coins  = ['BTC', 'BCH', 'ETH', 'LTC'];
        this.gsxID  = '1q0dLorKke1HMD22mkZztuavFCYDKLIzU7VrBGmL6oRQ';
        this.gsxURL = `https://spreadsheets.google.com/feeds/list/${this.gsxID}/default/public/values?alt=json`;
        this.coinPrices = {};
        this.coinShares = {};
        this.init();
    }

    init() {
        this.fetchJSON(this.gsxURL, this.setGSXData);
        this.coins.forEach( coinType => { this.fetchJSON(`https://api.coinbase.com/v2/prices/${coinType}-USD/sell`, this.setCoinData ); });
    }

    fetchJSON(url, JSONCallback) {
        fetch(url).then( data => data.json() ).then( JSONCallback );
    }

    setCoinData(json) {
        console.log(json)
    }

    setGSXData(json) {
        console.log(json.feed.entry);
    }
}

new CoinPrices();