import { Wallet } from '../wallet.model';
export interface IPaymentsProps {
  type: 'PIX' | 'TED' | 'TEF';
  from: Wallet;
  to: Wallet;
  status: 'SUCCESS' | 'FAIL';
}
export class PaymentsValueObject {
  public id: string;
  public type: 'PIX' | 'TED' | 'TEF';
  public from: Wallet;
  public to: Wallet;
  public status: 'SUCCESS' | 'FAIL';
  public transactionDate: string;

  constructor() {}

  public pixTransfer(fromAccount: Wallet, toAccount: Wallet, amount: number) {
    this.type = 'PIX';
    this.transactionDate = new Date().toISOString();
    this.to = toAccount;
    this.from = fromAccount;
    try {
      fromAccount.withdraw(amount);
      toAccount.deposit(amount);
      this.status = 'SUCCESS';
    } catch (e) {
      this.status = 'FAIL';
    }
  }
  public TedTransfer(fromAccount: Wallet, toAccount: Wallet, amount: number) {
    this.type = 'TED';
    this.transactionDate = new Date().toISOString();
    this.to = toAccount;
    this.from = fromAccount;
    try {
      fromAccount.withdraw(amount);
      toAccount.deposit(amount);
      this.status = 'SUCCESS';
    } catch (e) {
      this.status = 'FAIL';
    }
  }
  public TefTransfer(fromAccount: Wallet, toAccount: Wallet, amount: number) {
    this.type = 'TEF';
    this.transactionDate = new Date().toISOString();
    this.to = toAccount;
    this.from = fromAccount;
    try {
      fromAccount.withdraw(amount);
      toAccount.deposit(amount);
      this.status = 'SUCCESS';
    } catch (e) {
      this.status = 'FAIL';
    }
  }
}
