import { ErrorBase } from '../../../shared/exceptions/custom.error';

export class CouldNotActivateUserExceptions extends ErrorBase {
  constructor(exception = 'Error when trying to activate user account.') {
    super(409, exception, 'USER.UNABLE_TO_ACTIVATE_USER');
  }
}
