import { BinanceClient, BinanceConfig } from "./clients/binance";
import { MockedClient, MockedConfig } from "./clients/mock";
import { IExchangeClient, IExchangeConfig, Portfolio } from "./model";
import { PortfolioBalancer } from "./PortfolioBalancer";

describe("Portfolio Balancer", () => {
    let config: IExchangeConfig;
    let client: IExchangeClient;

    beforeEach(() => {
        config = new MockedConfig();
        client = new MockedClient(config);
    });

    it("should init a new portfolio balancer", () => {
        const balancer = new PortfolioBalancer(config, client);

        expect(balancer).toBeDefined();
        expect(balancer).toBeInstanceOf(PortfolioBalancer);
        expect(balancer.name).toEqual(config.name);
    });

    it("should get portfolio allocations", async () => {
        const balancer = new PortfolioBalancer(config, client);

        const allocations = await balancer.allocations;

        expect(allocations).toBeDefined();
        expect(allocations).toEqual(config.allocations);
        expect(allocations.length).toBeGreaterThanOrEqual(1);
    });

    it("should get portfolio", async () => {
        const balancer = new PortfolioBalancer(config, client);

        const balance = await balancer.GetPortfolio();

        expect(balance).toBeDefined();
        expect(balance).toBeInstanceOf(Portfolio);
        expect(balance.assets.length).toBeGreaterThanOrEqual(1);
    });

    it("should match account balance with portfolio allocations", async () => {
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
