import { Asset, IExchangeConfig } from "../../model";
import { BinanceClient, BinanceConfig } from "./";

let config: IExchangeConfig;

beforeEach(() => {
    config = new BinanceConfig();
});

describe("Binance Client", () => {
    it("should create a new client instance", () => {
        const client = new BinanceClient(config);

        expect(client).toBeDefined();
        expect(client).toBeInstanceOf(BinanceClient);
    });
});

describe("Balances", () => {
    it("should get account balance", async () => {
        const client = new BinanceClient(config);

        const balances = await client.GetAccountBalance();

        expect(balances).toBeDefined();
    });

    it("should get an asset", async () => {
        const name = "ETH";
        const client = new BinanceClient(config);

        const asset = await client.GetAssetDetails(new Asset(name));

        expect(asset).toBeDefined();
        expect(asset).toBeInstanceOf(Asset);
        expect(asset.name).toBe(name);
        expect(asset.tickers.length).toBeGreaterThanOrEqual(1);
    });
});