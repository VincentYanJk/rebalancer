import { BinanceClient, BinanceConfig } from "./clients/binance";
import { MockedClient, MockedConfig } from "./clients/mock";
import { IExchangeClient, IExchangeConfig, Portfolio } from "./model";
import { PortfolioBalancer } from "./PortfolioBalancer";

const config = new BinanceConfig();
const client = new BinanceClient(config);
const balancer = new PortfolioBalancer(config, client);

balancer.GetPortfolio().then(portfolio => {
    console.log(portfolio.source, "portfolio");
    for (const a of portfolio.assets) {
        console.log(a.name, a.total, a.allocation + "%");
    }
    console.log("Total value");
    console.log(portfolio.ValueInBtc, "BTC");
    console.log(portfolio.ValueInUsd, "USD");
});