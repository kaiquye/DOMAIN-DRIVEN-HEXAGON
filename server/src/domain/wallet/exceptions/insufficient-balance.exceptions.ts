import { ErrorBase } from '../../../shared/exceptions/custom.error';

export class InsufficientBalanceExceptions extends ErrorBase {
  constructor(
    exception = 'The transaction was declined due to insufficient balance in the account',
  ) {
    super(500, exception, 'TRANSACTION.FAILED');
  }
}
