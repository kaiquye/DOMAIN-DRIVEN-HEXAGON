export abstract class IEntity<T extends Y, Y> {
  abstract Id: string;
  abstract toDomain(data: T): Y;
  abstract toView(data: Y): T;
}

export abstract class IUseCase<Input, Output> {
  abstract execute(data: Input): Output;
}

export abstract class IDomainService<Input, OutPut> {
  abstract performTask(data: Input): OutPut;
}

export interface IErrorResponse {
  error: {
    status: true;
    messages: string[];
    code?: string;
  };
}
