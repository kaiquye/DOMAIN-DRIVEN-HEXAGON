import {
  IFindWalletByAccountAndNumber,
  IWalletRepository,
} from '../../../application/wallet/repository/wallet-repository.interfaces';
import { Wallet } from '../../../domain/wallet/wallet.model';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class WalletRepository implements IWalletRepository {
  constructor(private postgres: PrismaService) { }
  async findByUserId(id: string): Promise<Wallet> {
    if (!id) {
      return null;
    }

    const wallet = await this.postgres.wallet.findFirst({
      where: {
        userId: id,
      },
    });

    return Wallet.toDomain({
      ...wallet,
      accountHistory: JSON.parse(wallet.accountHistory.toString()),
    });
  }
  async save(data: Wallet): Promise<Wallet> {
    const newWaller = await this.postgres.wallet.create({
      data: {
        id: data.id,
        accountDigit: data.accountDigit,
        balance: data.balance,
        accountHistory: JSON.stringify(data.accountHistory),
        accountNumber: data.accountNumber,
        userId: data.userId,
      },
    });

    return Wallet.toDomain({
      ...newWaller,
      accountHistory: JSON.parse(newWaller.accountHistory.toString()),
    });
  }

  async findAccountBYNumberAndDigit(
    data: IFindWalletByAccountAndNumber,
  ): Promise<Wallet> {
    const wallet = await this.postgres.wallet.findFirst({
      where: {
        accountNumber: data.accountNumber,
        accountDigit: data.accountDigit,
      },
    });

    return wallet
      ? Wallet.toDomain({
        ...wallet,
        accountHistory: JSON.parse(wallet?.accountHistory.toString()),
      })
      : null;
  }

  async updateBalance(data: Wallet): Promise<void> {
    await this.postgres.wallet.update({
      where: {
        id: data.id,
      },
      data: {
        balance: Number(data.balance),
      },
    });
  }
}
