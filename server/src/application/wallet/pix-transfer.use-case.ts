import {
  IPixTransferService,
  ITransferMoneyInput,
  ITransferMoneyOutput,
} from './interfaces/tranfer-money.interface';
import { Result } from '../../infra/adapters/response.adapters';
import { Inject, Injectable, Res } from '@nestjs/common';
import { IWalletRepository } from './repository/wallet-repository.interfaces';
import { QueueAdapter } from '../../infra/adapters/queue.adapter';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PixTransferEvent } from '../../domain/wallet/events/pix-transfer.event';
import { WalletNotFoundExceptions } from '../../domain/wallet/exceptions/wallet-not-found.exceptions';
import { IUseRepository } from '../user/repository/use-repository.interfaces';

@Injectable()
export class PixTransferUseCase implements IPixTransferService {
  constructor(
    @Inject('wallet-rep')
    private readonly walletRep: IWalletRepository,
    @QueueAdapter()
    private queue: EventEmitter2,
  ) { }
  async perform(
    input: ITransferMoneyInput,
  ): Promise<Result<ITransferMoneyOutput>> {
    const findReceiver = this.walletRep.findAccountBYNumberAndDigit({
      accountDigit: input.receiver.accountDigit,
      accountNumber: input.receiver.accountNumber,
    });
    const findPayer = this.walletRep.findByUserId(input.payer.id);

    const [receiverFound, payerFound] = await Promise.all([
      findReceiver,
      findPayer,
    ]);

    if (!receiverFound) {
      throw new WalletNotFoundExceptions('receiver not found');
    }

    if (!payerFound) {
      throw new WalletNotFoundExceptions('payer not found');
    }

    const amount = input.amount;
    payerFound.payments.pixTransfer(payerFound, receiverFound, amount);

    if (payerFound.payments.status === 'FAIL') {
    }

    await Promise.all([
      this.walletRep.updateBalance(payerFound),
      this.walletRep.updateBalance(receiverFound),
    ]);

    this.queue.emit('pix.transfer', new PixTransferEvent(payerFound.payments));

    return Result.Ok<ITransferMoneyOutput>({
      message: 'pix transfer successfully',
      transactionId: '',
    });
  }
}
