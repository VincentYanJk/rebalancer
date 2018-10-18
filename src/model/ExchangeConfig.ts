import { IAsset } from ".";

export interface IExchangeConfig {
    name: string;
    apiKey: string;
    apiSecret: string;

    allocations: IAsset[];
}