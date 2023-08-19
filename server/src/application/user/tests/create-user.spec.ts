import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../infra/postgres/prisma.service';
import { CreateUserUseCase } from '../create-user.use-case';
import {
  ICreateUserInput,
  ICreateUserUseCase,
} from '../interfaces/create-user-use-case.interface';
import { UserProviders } from '../user.module';
import { RepositoriesProviders } from '../../../infra/postgres/postgres.module';

describe('(tests)', () => {
  let service: ICreateUserUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, ...UserProviders, ...RepositoriesProviders],
    }).compile();

    service = module.get<ICreateUserUseCase>(CreateUserUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user', async () => {
    const body: ICreateUserInput = {
      email: 'kaique@gmail.com',
      lastName: 'kaic',
      fistName: 'kaique',
      password: '@@Batata22',
    };

    const result = await service.perform(body);
    console.log(result);
    expect(result).toBeDefined();
    expect(result).toHaveProperty('id');
  });
});
