import { Result } from './response.adapters';

export abstract class UseCaseAdapters<Input, Output extends Result<{}>> {
  abstract perform(input: Input): Promise<Output>;
}
