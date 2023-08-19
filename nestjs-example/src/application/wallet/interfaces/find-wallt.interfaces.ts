import { UseCaseAdapters } from '../../../infra/adapters/use-case.adapters';
import { Result } from '../../../infra/adapters/response.adapters';
import { Wallet } from '../../../domain/wallet/wallet.model';

export interface IFindWalletInput {
  userId: string;
}

export interface IFindWalletOutput {
  wallets: Wallet[];
}

export type IFindWalletService = UseCaseAdapters<
  IFindWalletInput,
  Result<IFindWalletOutput>
>;
