type IResponseProps<Type> = {
  message: string;
} & Type;

export class Result<T> {
  constructor(private status: number, private data: IResponseProps<T>) {}

  static Ok<T>(data: IResponseProps<T>): Result<T> {
    return new Result<T>(200, data);
  }

  static Created<T>(data: IResponseProps<T>): Result<T> {
    return new Result<T>(201, data);
  }
}
