import { IExchangeClient, IExchangeConfig, IPortfolio, Portfolio } from "./model";

export class PortfolioBalancer {

    private config: IExchangeConfig;
    private client: IExchangeClient;

    constructor(config: IExchangeConfig, client: IExchangeClient) {
        this.config = config;
        this.client = client;
    }

    public async GetBalance(): Promise<IPortfolio> {
        const portfolio = new Portfolio(this.config.name);

        const assets = await this.client.GetAccountBalance();
        for (const a of assets) {
            const asset = await this.client.GetAssetDetails(a.name);
            portfolio.AddAsset(asset);
        }

        return portfolio;
    }
}