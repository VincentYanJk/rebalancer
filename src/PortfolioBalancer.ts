import { IAsset, IExchangeClient, IExchangeConfig, IPortfolio, Portfolio } from "./model";

export class PortfolioBalancer {

    private config: IExchangeConfig;
    private client: IExchangeClient;

    public name: string;
    public allocations: IAsset[];
    public portfolio: IPortfolio;

    constructor(config: IExchangeConfig, client: IExchangeClient) {
        this.config = config;
        this.client = client;

        this.name = config.name;
        this.allocations = config.allocations;
    }

    public async GetPortfolio(): Promise<IPortfolio> {
        const portfolio = new Portfolio(this.config.name);

        const assets = await this.client.GetAccountBalance();
        for (const a of assets) {
            const asset = await this.client.GetAssetDetails(a);
            portfolio.AddAsset(asset);
        }

        return portfolio;
    }
}