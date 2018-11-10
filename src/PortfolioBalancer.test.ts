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

        // config = new BinanceConfig();
        // client = new BinanceClient(config);
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

        const portfolio = await balancer.GetPortfolio();

        expect(portfolio).toBeDefined();
        expect(portfolio).toBeInstanceOf(Portfolio);
        expect(portfolio.assets.length).toBeGreaterThanOrEqual(1);
    });

    it("should match account balance with portfolio allocations", async () => {
        const balancer = new PortfolioBalancer(config, client);

        const portfolio = await balancer.GetPortfolio();
        const allocations = balancer.allocations;

        expect(portfolio).toBeDefined();
        expect(allocations).toBeDefined();

        for (const asset of portfolio.assets) {
            const allocated = allocations.find(a => a.name === asset.name);
            expect(allocated).toBeDefined();
        }
    });

    it("should get portfolio value in BTC", async () => {
        const balancer = new PortfolioBalancer(config, client);

        const portfolio = await balancer.GetPortfolio();
        const allocations = balancer.allocations;

        expect(portfolio).toBeDefined();
        expect(allocations).toBeDefined();

        const expected = 0.2;
        const actual = portfolio.ValueInBtc;
        expect(expected).toBe(actual);
    });

    it("should get portfolio value in USD", async () => {
        const balancer = new PortfolioBalancer(config, client);

        const portfolio = await balancer.GetPortfolio();
        const allocations = balancer.allocations;

        expect(portfolio).toBeDefined();
        expect(allocations).toBeDefined();

        const expected = 1000;
        const actual = portfolio.ValueInUsd;
        expect(expected).toBe(actual);
    });
});
