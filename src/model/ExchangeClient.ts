import { IAsset, IPortfolio } from ".";

export interface IExchangeClient {
    GetBalance(): Promise<IPortfolio>;
    GetAsset(): Promise<IAsset>;
}