import { ErrorBase } from '../../../shared/exceptions/custom.error';

export class FailedToInitializeBankStatementException extends ErrorBase {
  constructor(exception = 'failed to initialize bank statement.') {
    super(500, exception, 'WALLET.FAILED');
  }
}
