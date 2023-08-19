export interface IWallet {
    id: string,
    accountNumber: number,
    accountDigit: number,
    balance: number,
    userId: number,
    accountHistory: IAccountHistory[]
}

export interface IAccountHistory {
    balance: number,
    date: Date
}