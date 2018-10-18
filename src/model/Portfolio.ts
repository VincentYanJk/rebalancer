import { IAsset } from "./Asset";

export interface IPortfolio {
    source: string;
    assets: IAsset[];

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
}