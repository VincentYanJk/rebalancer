import { IAsset } from ".";

export interface IExchangeClient {
    GetAccountBalance(): Promise<IAsset[]>;
    GetAssetDetails(name: IAsset): Promise<IAsset>;
}