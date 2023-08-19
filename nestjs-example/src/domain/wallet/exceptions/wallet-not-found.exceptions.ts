import { ErrorBase } from '../../../shared/exceptions/custom.error';

export class WalletNotFoundExceptions extends ErrorBase {
  constructor(exception = 'wallet not found') {
    super(500, exception, 'WALLET.NOT.FOUND');
  }
}
