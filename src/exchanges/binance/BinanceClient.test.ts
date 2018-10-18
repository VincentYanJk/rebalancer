import { Asset, IExchangeConfig, IPortfolio, Portfolio } from "../../model";
import { BinanceClient, BinanceConfig } from "./";

let config: IExchangeConfig;

beforeAll(() => {
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
    it("should get balances", async () => {
        const client = new BinanceClient(config);

        const balances = await client.GetBalance();

        expect(balances).toBeDefined();
        expect(balances).toBeInstanceOf(Portfolio);
        expect(balances.source).toBe(config.name);
    });

    it("should get an asset", async () => {
        const name = "ETH";
        const client = new BinanceClient(config);

        const asset = await client.GetAsset(name);

        expect(asset).toBeDefined();
        expect(asset).toBeInstanceOf(Asset);
        expect(asset.name).toBe(name);
    });
});