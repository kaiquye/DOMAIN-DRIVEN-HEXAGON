import { UseCaseAdapters } from '../../../infra/adapters/use-case.adapters';
import { Result } from '../../../infra/adapters/response.adapters';
export interface ICreateUserInput {
  fistName: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface ICreateUserOutPut {
  id: string;
}

export type ICreateUserUseCase = UseCaseAdapters<
  ICreateUserInput,
  Result<ICreateUserOutPut>
>;
