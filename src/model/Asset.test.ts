import { Asset } from ".";
import { Ticker } from "./Ticker";

describe("Asset", () => {
    it("should create a new asset instance", () => {
        const name = "Test";

        const asset = new Asset(name);

        expect(asset).toBeDefined();
        expect(asset).toBeInstanceOf(Asset);
        expect(asset.name).toBe(name);
    });

    it("should add a new ticker", () => {
        const name = "Test";
        const asset = new Asset(name);
        const ticker = new Ticker("Symbol", 1);

        asset.AddTicker(ticker);

        expect(asset.tickers.length).toBe(1);
    });
});