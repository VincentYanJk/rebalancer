import * as dotenv from "dotenv";
dotenv.config();

import { Asset, IAsset, IExchangeConfig } from "../../model";

export class BinanceConfig implements IExchangeConfig {
    name: string;
    apiKey: string;
    apiSecret: string;
    allocations: IAsset[];

    constructor() {
        this.name = "Binance";
        this.apiKey = process.env.BINANCE_API_KEY || "";
        this.apiSecret = process.env.BINANCE_API_SECRET || "";

        this.allocations = new Array<Asset>();
        this.allocations.push(<Asset>{name: "BTC", allocation: 40});
        this.allocations.push(<Asset>{name: "ETH", allocation: 40});
        this.allocations.push(<Asset>{name: "TUSD", allocation: 20});
    }
}