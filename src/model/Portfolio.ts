import { IAsset } from "./Asset";

export interface IPortfolio {
    source: string;
    assets: IAsset[];

    readonly ValueInBtc: number;
    readonly ValueInUsd: number;

    AddAsset(asset: IAsset): void;
}

export class Portfolio implements IPortfolio {
    source: string;
    assets: IAsset[];

    constructor(name: string) {
        this.source = name;
        this.assets = new Array<IAsset>();
    }

    public AddAsset(asset: IAsset): void {
        this.assets.push(asset);
    }

    get ValueInBtc(): number {
        return this.getValueInBase("BTC");
    }

    get ValueInUsd(): number {
        return this.getValueInBase("USD");
    }

    private getValueInBase(base: string): number {
        let value = 0;

        for (const asset of this.assets) {
            if (asset.name == base) {
                value += asset.total;
                continue;
            }

            const ticker = asset.tickers.find(t => t.symbol.includes(base));
            if (ticker) {
                value += ticker.value;
            }
        }

        return value;
    }
}