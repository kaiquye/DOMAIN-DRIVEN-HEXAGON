import { v4 as uuidv4 } from 'uuid';
import GenerateNumberService from './services/generate-number.service';
import { FailedToInitializeBankStatementException } from './exceptions/failed-to-initialize-bank-statement.exception';
import GenerateDigitService from './services/generate-digit.service';
import { ICreateWalletInput } from '../../application/wallet/interfaces/create-wallet.interfaces';
import { User } from '../user/user.model';
import { InsufficientBalanceExceptions } from './exceptions/insufficient-balance.exceptions';
import { PaymentsValueObject } from './valueObject/payments.value-object';

export interface IWallet {
  id: string;
  accountNumber: number;
  accountDigit: number;
  balance: number;
  accountHistory: IAccountHistory[];
  userId: string;
  createAt?: Date;
  updatedAt?: Date;
}
export interface IAccountHistory {
  balance: number;
  date: Date;
}

export interface IWalletProps {
  id: string;
  accountNumber: number;
  accountDigit: number;
  balance: number;
  accountHistory: IAccountHistory[];
  userId: string;
  createAt?: Date;
  updatedAt?: Date;
}

export class Wallet {
  public id: string;
  public accountNumber: number;
  public accountDigit: number;
  public balance = 0;
  public accountHistory: IAccountHistory[];
  public userId: string;
  public createAt?: Date;
  public updatedAt?: Date;
  private readonly limit? = 5000000;
  public readonly payments?: PaymentsValueObject;

  constructor(props: IWalletProps) {
    this.id = props.id;
    this.accountNumber = props.accountNumber;
    this.accountDigit = props.accountDigit;
    this.balance = props.balance;
    this.accountHistory = props.accountHistory;
    this.userId = props.userId;
    this.payments = new PaymentsValueObject();
  }

  static create(owner: User): Wallet {
    const accountNumber = GenerateNumberService.performTask();
    const accountDigit = GenerateDigitService.performTask();
    const balance = 0;
    const id = uuidv4();
    const accountHistory = this.startAccountHistory(balance);

    const maxWallets = 2;
    const wallets = owner.wallets.length;

    if (wallets >= maxWallets) {
      throw new Error('numero wallets');
    }

    return new Wallet({
      id,
      accountDigit,
      accountHistory,
      accountNumber,
      balance,
      userId: owner.id,
    });
  }

  static startAccountHistory(balance: number) {
    if (balance === 0) {
      const accountHistory: IAccountHistory[] = [
        {
          balance: 0,
          date: new Date(),
        },
      ];
      return accountHistory;
    }

    throw new FailedToInitializeBankStatementException();
  }

  public withdraw(amount: number) {
    const currentBalance = this.balance - amount;

    if (amount > this.limit) {
      throw new InsufficientBalanceExceptions();
    }
    if (this.balance < amount) {
      throw new InsufficientBalanceExceptions();
    }

    this.balance = currentBalance;
  }

  public deposit(amount: number) {
    this.balance = Number(this.balance) + Number(amount);
  }

  static toDomain(data: Partial<IWallet>): Wallet {
    return new Wallet({
      id: data.id,
      accountDigit: data.accountDigit,
      accountHistory: data.accountHistory,
      accountNumber: data.accountNumber,
      balance: data.balance,
      userId: data.userId,
    });
  }

  static toView(data: Partial<IWallet>): Wallet {
    return undefined;
  }
}
