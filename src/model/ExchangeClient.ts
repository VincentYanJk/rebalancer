import { IAsset } from ".";

export interface IExchangeClient {
    GetAccountBalance(): Promise<IAsset[]>;
    GetAssetDetails(name: string): Promise<IAsset>;
}