import { ErrorBase } from '../../../shared/exceptions/custom.error';

export class UserNotFoundException extends ErrorBase {
  constructor(exception = 'user not found.') {
    super(404, exception, 'USER.NOT_FOUND');
  }
}
