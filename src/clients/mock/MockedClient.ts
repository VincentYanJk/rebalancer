import { Asset, IAsset, IExchangeClient, IExchangeConfig, Ticker } from "../../model";

export class MockedClient implements IExchangeClient {

    private config: IExchangeConfig;

    constructor(config: IExchangeConfig) {
        this.config = config;
    }

    public async GetAccountBalance(): Promise<IAsset[]> {

        const assets = new Array<IAsset>();
        const btc = new Asset("BTC");
        btc.available = 0.1;
        btc.total = 0.1;
        assets.push(btc);

        const eth = new Asset("ETH");
        eth.available = 1;
        eth.total = 1;
        assets.push(eth);

        return assets;
    }

    public async GetAssetDetails(asset: IAsset): Promise<IAsset> {

        if (asset.name == "BTC") {
            asset.AddTicker(new Ticker("BTCUSDT", 5000));
        }

        if (asset.name == "ETH") {
            asset.AddTicker(new Ticker("ETHBTC", 0.1));
            asset.AddTicker(new Ticker("ETHUSDT", 500));
        }

        return asset;
    }
}