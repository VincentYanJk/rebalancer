import { BinanceClient, BinanceConfig } from "./clients/binance";
import { Portfolio } from "./model";
import { PortfolioBalancer } from "./PortfolioBalancer";

describe("Portfolio Balancer", () => {
    it("should init a new portfolio balancer", () => {
        const config = new BinanceConfig();
        const client = new BinanceClient(config);

        const balancer = new PortfolioBalancer(config, client);

        expect(balancer).toBeDefined();
        expect(balancer).toBeInstanceOf(PortfolioBalancer);
        expect(balancer.name).toEqual(config.name);
    });

    it("should get portfolio allocations", async () => {
        const config = new BinanceConfig();
        const client = new BinanceClient(config);
        const balancer = new PortfolioBalancer(config, client);

        const allocations = await balancer.allocations;

        expect(allocations).toBeDefined();
        expect(allocations).toEqual(config.allocations);
        expect(allocations.length).toBeGreaterThanOrEqual(1);
    });

    it("should get portfolio", async () => {
        const config = new BinanceConfig();
        const client = new BinanceClient(config);
        const balancer = new PortfolioBalancer(config, client);

        const balance = await balancer.GetPortfolio();

        expect(balance).toBeDefined();
        expect(balance).toBeInstanceOf(Portfolio);
    });

    it("should match account balance with portfolio allocations", async () => {
        const config = new BinanceConfig();
        const client = new BinanceClient(config);
        const balancer = new PortfolioBalancer(config, client);

        const balance = await balancer.GetPortfolio();
        const allocations = balancer.allocations;

        expect(balance).toBeDefined();
        expect(allocations).toBeDefined();

        for (const asset of balance.assets) {
            const allocated = allocations.find(a => a.name === asset.name);
            expect(allocated).toBeDefined();
        }
    });

    it("should calculate account and allocations differences", async () => {
        console.log("Not implemented..");
    });
});
