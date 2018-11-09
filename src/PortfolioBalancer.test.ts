import { BinanceClient, BinanceConfig } from "./clients/binance";
import { Portfolio } from "./model";
import { PortfolioBalancer } from "./PortfolioBalancer";

describe("Portfolio Balancer", () => {
    it("should init a new instance", () => {
        const config = new BinanceConfig();
        const client = new BinanceClient(config);

        const balancer = new PortfolioBalancer(config, client);

        expect(balancer).toBeDefined();
        expect(balancer).toBeInstanceOf(PortfolioBalancer);
    });

    it("should get portfolio balance", async () => {
        const config = new BinanceConfig();
        const client = new BinanceClient(config);
        const balancer = new PortfolioBalancer(config, client);

        const balance = await balancer.GetBalance();

        expect(balance).toBeDefined();
        expect(balance).toBeInstanceOf(Portfolio);
        expect(balance.assets.length).toBeGreaterThanOrEqual(1);
    });
});
