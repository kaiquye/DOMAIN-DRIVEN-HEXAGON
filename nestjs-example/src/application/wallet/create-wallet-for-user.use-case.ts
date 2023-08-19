import {
  ICreateWalletInput,
  ICreateWalletOutput,
  ICreateWalletUseCase,
} from './interfaces/create-wallet.interfaces';
import { Result } from '../../infra/adapters/response.adapters';
import { Inject, Injectable } from '@nestjs/common';
import { IUseRepository } from '../user/repository/use-repository.interfaces';
import { Wallet } from '../../domain/wallet/wallet.model';
import { IWalletRepository } from './repository/wallet-repository.interfaces';
import { CouldNotActivateUserExceptions } from '../../domain/user/exceptions/could-not-activate-user.exceptions';
import { UserAlreadyException } from '../../domain/user/exceptions/user-already.exception';
import { RolesGuard } from 'src/infra/guards/roles.guards';

@Injectable()
export class CreateWalletForUserUseCase implements ICreateWalletUseCase {
  constructor(
    @Inject('wallet-rep')
    private walletRep: IWalletRepository,
    @Inject('user-rep')
    private useRep: IUseRepository,
  ) {}
  async perform(
    input: ICreateWalletInput,
  ): Promise<Result<ICreateWalletOutput>> {
    const userFound = await this.useRep.findUserAndWalletsByEmail(input.email);
    if (!userFound) {
      throw new UserAlreadyException(
        'error when looking for a user to create wallet ',
      );
    }

    const newWallet = Wallet.create(userFound);

    try {
      userFound.activateUser();
    } catch (exception) {
      throw new CouldNotActivateUserExceptions(exception.message);
    }

    await this.walletRep.save(newWallet);
    await this.useRep.updateUserStatus(userFound);

    return Result.Created<ICreateWalletOutput>({
      message: 'new wallet created',
      userId: newWallet.userId,
      walletId: newWallet.id,
      createAt: newWallet.createAt,
    });
  }
}
