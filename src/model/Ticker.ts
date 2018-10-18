export interface ITicker {
    symbol: string;
    price: number;
}

export class Ticker implements ITicker {
   symbol: string;
   price: number;

   constructor(symbol: string, price: number) {
       this.symbol = symbol;
       this.price = price;
   }
}