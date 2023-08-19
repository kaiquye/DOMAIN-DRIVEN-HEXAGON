import {
  IFindWalletInput,
  IFindWalletOutput,
  IFindWalletService,
} from './interfaces/find-wallt.interfaces';
import { Result } from '../../infra/adapters/response.adapters';
import { Inject, Injectable } from '@nestjs/common';
import { IUseRepository } from '../user/repository/use-repository.interfaces';
import { UserNotFoundException } from '../../domain/user/exceptions/user-not-found.exception';

@Injectable()
export class FindWalletUseCase implements IFindWalletService {
  constructor(
    @Inject('user-rep')
    private readonly userRep: IUseRepository,
  ) { }
  async perform(input: IFindWalletInput): Promise<Result<IFindWalletOutput>> {
    const userFound = await this.userRep.findUserAndWalletsById(input.userId);
    if (!userFound) {
      throw new UserNotFoundException();
    }

    delete userFound.password;
    return Result.Ok<IFindWalletOutput>({
      message: 'wallets by user',
      wallets: userFound as any,
    });
  }
}
