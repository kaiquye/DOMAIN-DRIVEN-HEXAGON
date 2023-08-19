import { IEmailAdapters } from '../adapters/email.adapters';

export class EmailProvider extends IEmailAdapters<any, any> {
  constructor() {
    super('../../templates/new-use.html');
  }
  async send(data) {
    console.log('send email', data);
    return undefined;
  }
}
