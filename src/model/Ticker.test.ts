import { Ticker } from ".";

describe("Ticker", () => {
    it("should create a new ticker instance", () => {
        const name = "Test";
        const price = 1;

        const ticker = new Ticker(name, price);

        expect(ticker).toBeDefined();
        expect(ticker).toBeInstanceOf(Ticker);
        expect(ticker.symbol).toBe(name);
        expect(ticker.price).toBe(price);
    });
});