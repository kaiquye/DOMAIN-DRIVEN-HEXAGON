import { Module, Provider } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from './prisma.service';
import { WalletRepository } from './repositories/wallet.repository';

export const RepositoriesProviders: Provider[] = [
  {
    provide: 'user-rep',
    useClass: UserRepository,
  },
  {
    provide: 'wallet-rep',
    useClass: WalletRepository,
  },
];
@Module({
  exports: [...RepositoriesProviders],
  providers: [...RepositoriesProviders, PrismaService],
})
export class PostgresModule {}
