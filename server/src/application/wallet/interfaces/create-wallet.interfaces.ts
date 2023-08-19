import { Result } from '../../../infra/adapters/response.adapters';
import { UseCaseAdapters } from '../../../infra/adapters/use-case.adapters';

export interface ICreateWalletInput {
  name: string;
  email: string;
  password: number;
}

export interface ICreateWalletOutput {
  walletId: string;
  userId: string;
  createAt: Date;
}

export type ICreateWalletUseCase = UseCaseAdapters<
  ICreateWalletInput,
  Result<ICreateWalletOutput>
>;
