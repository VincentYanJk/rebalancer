import { Asset, IAsset, IExchangeConfig } from "../../model";

export class MockedConfig implements IExchangeConfig {
    name: string;
    apiKey: string;
    apiSecret: string;
    allocations: IAsset[];

    constructor() {
        this.name = "MOQ";
        this.apiKey = "moqApiKey";
        this.apiSecret = "moqApiSecret";

        this.allocations = new Array<Asset>();
        this.allocations.push(<Asset>{name: "BTC", allocation: 50});
        this.allocations.push(<Asset>{name: "ETH", allocation: 50});
    }
}