import { ITicker } from ".";

export interface IAsset {
    name: string;
    allocation: number;
    total: number;
    available: number;
    tickers: ITicker[];

    AddTicker(ticker: ITicker): void;
}

export class Asset implements IAsset {
    name: string;
    allocation: number;
    total: number;
    available: number;
    tickers: ITicker[];

    constructor(name: string) {
        this.name = name;
        this.tickers = new Array<ITicker>();
    }

    AddTicker(ticker: ITicker): void {
        this.tickers.push(ticker);
    }
}