import { IAsset, IPortfolio } from ".";

export interface IExchangeClient {
    GetBalance(): Promise<IPortfolio>;
    GetAsset(name: string): Promise<IAsset>;

    // GetTrades(ticker: string): Promise<any>; // TODO: Any
    // GetCandles(ticker: string): Promise<any>; // TODO: Any
    // GetOrderBook(ticker: string): Promise<any>; // TODO: Any
}