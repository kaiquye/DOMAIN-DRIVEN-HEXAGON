import { UseCaseAdapters } from '../../../infra/adapters/use-case.adapters';
import { Result } from '../../../infra/adapters/response.adapters';

export interface ITransferMoneyInput {
  amount: number;
  payer: {
    id: string;
  };
  receiver: {
    accountNumber: number;
    accountDigit: number;
  };
}

export interface ITransferMoneyOutput {
  transactionId: string;
}

export type IPixTransferService = UseCaseAdapters<
  ITransferMoneyInput,
  Result<ITransferMoneyOutput>
>;
export type ITedTransferService = UseCaseAdapters<
  ITransferMoneyInput,
  Result<ITransferMoneyOutput>
>;
export type ITefTransferService = UseCaseAdapters<
  ITransferMoneyInput,
  Result<ITransferMoneyOutput>
>;
