import { IUser } from "../../structure/user.structure";
import { AdapterService } from "../../ultils/adapter";
import { apiBase } from "../api";

export interface IGetWalletDetailsIN {
    userId: string;
}

export type IGetWalletDetailsOut = IUser

export type IGetWalletDetails = AdapterService<IGetWalletDetailsIN, IGetWalletDetailsOut>

class GetWalletDetailService implements IGetWalletDetails {
    async perform(input: IGetWalletDetailsIN): Promise<IGetWalletDetailsOut> {
        const { data } = await apiBase.get(`/user/wallet/${input.userId}`)
        const { wallets } = data.payload.data
        console.warn(wallets)
        return wallets
    }
}

export default new GetWalletDetailService()