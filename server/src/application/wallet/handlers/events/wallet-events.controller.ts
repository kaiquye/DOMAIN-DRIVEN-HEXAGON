import { OnEvent } from '@nestjs/event-emitter';
import { CreatedUserEvent } from '../../../../../dist/domain/user/events/created-user.event';
import { Inject, Injectable } from '@nestjs/common';
import { ICreateWalletUseCase } from '../../interfaces/create-wallet.interfaces';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class WalletEventsController {
  constructor(
    @Inject('create-wallet-use-case')
    private createWalletUseCase: ICreateWalletUseCase,
    @InjectPinoLogger(WalletEventsController.name)
    private readonly logger: PinoLogger,
  ) {}

  @OnEvent('user.created')
  async Create(event: CreatedUserEvent) {
    try {
      const result = await this.createWalletUseCase.perform({
        name: event.infos.name,
        email: event.infos.email,
        password: event.infos.transactionPassword,
      });
      this.logger.info('Create wallet error.', { result });
    } catch (exception) {
      this.logger.error(exception);
    }
  }
}
