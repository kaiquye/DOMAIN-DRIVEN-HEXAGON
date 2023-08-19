import { Result } from 'src/infra/adapters/response.adapters';
import { UseCaseAdapters } from '../../../infra/adapters/use-case.adapters';

export interface ILoginUserInput {
  email: string;
  password: string;
}

export interface ILoginUserOutput {
  id: string;
  accessToken: string;
}

export type ILoginUseCase = UseCaseAdapters<
  ILoginUserInput,
  Result<ILoginUserOutput>
>;
