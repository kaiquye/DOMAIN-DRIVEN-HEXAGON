import { IWallet } from "./wallet.structure";

export interface IUser {
    id: string,
    fistName: string,
    lastName: string,
    email: string,
    status: string,
    wallets: IWallet[]
}

