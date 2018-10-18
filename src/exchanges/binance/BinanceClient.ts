import Binance from "binance-api-node";
// import { Binance as Client } from "binance-api-node";
import { Asset, IAsset, IExchangeClient, IExchangeConfig, IPortfolio, Portfolio, Ticker } from "../../model";

export class BinanceClient implements IExchangeClient {

    private config: IExchangeConfig;
    private binanceClient: any; // Client;

    constructor(config: IExchangeConfig) {

        this.binanceClient = Binance({
            apiKey: config.apiKey,
            apiSecret: config.apiSecret
        });
        this.config = config;
    }

    public async GetBalance(): Promise<IPortfolio> {

        const portfolio = new Portfolio(this.config.name);

        try {
            const accountInfo = await this.binanceClient.accountInfo({ useServerTime: true });
            const accountBalance = accountInfo.balances;

            for (const b in accountBalance) {
                const balance = accountBalance[b];
                const asset = new Asset(balance.asset);
                asset.available = parseFloat(balance.free);
                asset.total = parseFloat(balance.free) + parseFloat(balance.locked);

                if (asset.total) {
                    portfolio.AddAsset(asset);
                }
            }
        }
        catch {
            console.log("Error getting account balance");
        }

        return portfolio;
    }

    public async GetAsset(name: string): Promise<IAsset> {

        const asset = new Asset(name);
        const tickers = await this.binanceClient.allBookTickers();

        for (const symbol in tickers) {
            if (symbol.startsWith(name)) {

                const tick = tickers[symbol];
                const avgPrice = (parseFloat(tick.bidPrice) + parseFloat(tick.askPrice)) / 2;
                asset.AddTicker(new Ticker(symbol, avgPrice));
            }
        }

        return asset;
    }
}