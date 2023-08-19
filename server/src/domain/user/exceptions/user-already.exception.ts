import { ErrorBase } from '../../../shared/exceptions/custom.error';

export class UserAlreadyException extends ErrorBase {
  constructor(exception = 'user already registered.') {
    super(409, exception, 'USER.ALREADY_REGISTERED');
  }
}
