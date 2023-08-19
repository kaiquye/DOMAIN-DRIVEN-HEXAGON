import { Module, Provider } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.use-case';
import { UserHttpController } from './handlers/user-http.controller';
import { PostgresModule } from '../../infra/postgres/postgres.module';
import { LoginUserUseCase } from './login-user.use-case';

export const UserProviders: Provider[] = [
  {
    provide: 'create-user',
    useClass: CreateUserUseCase,
  },
  {
    provide: 'login-user',
    useClass: LoginUserUseCase,
  },
];
@Module({
  imports: [PostgresModule],
  controllers: [UserHttpController],
  providers: [...UserProviders],
})
export class UserModule {}
