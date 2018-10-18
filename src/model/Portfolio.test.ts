import { Portfolio } from "./";
import { Asset } from "./Asset";

describe("Portfolio", () => {
    it("should create a new instance", () => {
        const name = "Test";

        const client = new Portfolio(name);

        expect(client).toBeDefined();
        expect(client).toBeInstanceOf(Portfolio);
        expect(client.source).toBe(name);
    });

    it("should add new assets", () => {
        const name = "Test";
        const client = new Portfolio(name);
        const btc = new Asset("BTC");

        client.AddAsset(btc);

        expect(client.assets.length).toBe(1);
    });
});
