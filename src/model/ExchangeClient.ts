import { IPortfolio } from ".";

export interface IExchangeClient {
    GetBalance(): Promise<IPortfolio>;
}