import { ErrorBase } from '../../../shared/exceptions/custom.error';

export class InvalidEmailException extends ErrorBase {
  constructor(exception = 'invalid email') {
    super(400, exception, 'USER.INVALID_EMAIL');
  }
}
