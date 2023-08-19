import { Wallet } from '../../../domain/wallet/wallet.model';

export interface IFindWalletByAccountAndNumber {
  accountDigit: number;
  accountNumber: number;
}
export interface IWalletRepository {
  save(data: Wallet): Promise<Wallet>;
  findByUserId(id: string): Promise<Wallet>;
  findAccountBYNumberAndDigit(
    data: IFindWalletByAccountAndNumber,
  ): Promise<Wallet>;
  updateBalance(data: Wallet): Promise<void>;
}
