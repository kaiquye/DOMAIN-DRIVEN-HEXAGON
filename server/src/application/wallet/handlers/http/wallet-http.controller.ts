import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ICreateWalletUseCase } from '../../interfaces/create-wallet.interfaces';
import { CreateWalletDto } from '../dtos/create-wallet.dto';
import { FindWalletDto } from '../dtos/find-wallet.dto';
import { IFindWalletService } from '../../interfaces/find-wallt.interfaces';
import { IPixTransferService } from '../../interfaces/tranfer-money.interface';
import { PayerDtoParams, PixTransferDto } from '../dtos/pix-transfer.dto';
import { AuthGuards } from 'src/infra/guards/auth.guards';
import { RolesAllowed, Scope } from 'src/@config/roles-allowed.config';
import { RolesGuard } from 'src/infra/guards/roles.guards';

@Controller('/v1/user')
@UseGuards(RolesGuard)
@UseGuards(AuthGuards)
export class WalletHttpController {
  constructor(
    @Inject('create-wallet-use-case')
    private readonly createWalletUseCase: ICreateWalletUseCase,
    @Inject('find-wallet-use-case')
    private readonly findWalletUseCase: IFindWalletService,
    @Inject('pix-transfer-use-case')
    private readonly pixTransferUseCase: IPixTransferService,
  ) { }

  @Post('/wallet')
  async create(@Body() body: CreateWalletDto) {
    const body_ = {
      name: body.infos.name,
      email: body.infos.email,
      password: body.infos.transactionPassword,
    };
    return this.createWalletUseCase.perform(body_);
  }

  @Get('/wallet/:userId')
  async findByEmail(@Param() params: FindWalletDto) {
    return this.findWalletUseCase.perform({
      userId: params.userId,
    });
  }

  @Post('/wallet/pix/transfer/:id')
  @Scope([RolesAllowed.READ])
  async pixTransfer(
    @Param() params: PayerDtoParams,
    @Body() body: PixTransferDto,
  ) {
    return this.pixTransferUseCase.perform({
      ...body,
      payer: {
        id: params.id,
      },
    });
  }
}
