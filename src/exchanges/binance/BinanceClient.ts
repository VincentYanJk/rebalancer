import Binance from "binance-api-node";
import { IExchangeClient, IExchangeConfig } from "../../model";

export class BinanceClient implements IExchangeClient {

    private binanceClient: any;

    constructor(config: IExchangeConfig) {

        this.binanceClient = Binance({
            apiKey: config.apiKey,
            apiSecret: config.apiSecret
        });
    }

    public async GetBalance(): Promise<any> {

        const accountInfo = await this.binanceClient.accountInfo({ useServerTime: true });
        const balances = accountInfo.balances;

        for (const asset in balances) {
            const balance = balances[asset];
            const free = parseFloat(balance.free);
            const locked = parseFloat(balance.locked);
            if (free || locked) {
                balances[asset].total = free + locked;
            }
        }

        return accountInfo.balances.filter((b: any) => {
            return parseFloat(b.free) || parseFloat(b.locked);
        });
    }
}