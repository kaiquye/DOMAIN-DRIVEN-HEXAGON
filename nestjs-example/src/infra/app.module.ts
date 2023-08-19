import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './postgres/prisma.service';
import { UserModule } from '../application/user/user.module';
import { VariablesConfig } from '../@config/variables.config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventEmitterConfig } from '../@config/event-emitter.config';
import { WalletModule } from '../application/wallet/wallet.module';
import { LoggerModule } from 'nestjs-pino';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig } from 'src/@config/jwt.config';

@Module({
  imports: [
    UserModule,
    WalletModule,
    ConfigModule.forRoot(VariablesConfig),
    EventEmitterModule.forRoot(EventEmitterConfig),
    JwtModule.register(JwtConfig),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
        },
      },
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {}
