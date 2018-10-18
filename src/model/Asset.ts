export interface IAsset {
    name: string;
    allocation: number;
    total: number;
    available: number;
}

export class Asset implements IAsset {
    name: string;
    allocation: number;
    total: number;
    available: number;

    constructor(name: string) {
        this.name = name;
    }
}
