export interface ITicker {
    symbol: string;
    price: number;
    value: number;
}

export class Ticker implements ITicker {
   symbol: string;
   price: number;
   value: number;

   constructor(symbol: string, price: number) {
       this.symbol = symbol;
       this.price = price;
   }
}