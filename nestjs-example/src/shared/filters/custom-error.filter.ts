import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { IErrorResponse } from '../structure/app.structure';
import { ErrorBase } from '../exceptions/custom.error';

@Catch(ErrorBase)
export class CustomErrorFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: ErrorBase, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    console.log(new Date().toISOString(), exception);

    const message = exception.message;
    const reference = exception.reference;

    const responseBody = {
      error: {
        status: true,
        messages: Array.isArray(message) ? message : [message],
        reference,
      },
    } as IErrorResponse;

    httpAdapter.reply(ctx.getResponse(), responseBody, exception.status);
  }
}
