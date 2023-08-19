import { Module, Provider } from '@nestjs/common';
import { WalletEventsController } from './handlers/events/wallet-events.controller';
import { PostgresModule } from '../../infra/postgres/postgres.module';
import { CreateWalletForUserUseCase } from './create-wallet-for-user.use-case';
import { WalletHttpController } from './handlers/http/wallet-http.controller';
import { FindWalletUseCase } from './find-wallet.use-case';
import { PixTransferUseCase } from './pix-transfer.use-case';

export const IWalletProviders: Provider[] = [
  {
    provide: 'find-wallet-use-case',
    useClass: FindWalletUseCase,
  },
  {
    provide: 'create-wallet-use-case',
    useClass: CreateWalletForUserUseCase,
  },
  {
    provide: 'pix-transfer-use-case',
    useClass: PixTransferUseCase,
  },
];
@Module({
  imports: [PostgresModule],
  controllers: [WalletHttpController],
  providers: [WalletEventsController, ...IWalletProviders],
})
export class WalletModule {}
