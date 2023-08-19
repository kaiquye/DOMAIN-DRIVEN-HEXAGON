import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  ForbiddenException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { IErrorResponse } from '../structure/app.structure';

@Catch(ForbiddenException)
export class ForbiddenExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: ForbiddenException, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const responseBody = {
      error: {
        status: true,
        messages: [exception.message],
        code: 'forbidden.exception',
      },
    } as IErrorResponse;

    httpAdapter.reply(
      ctx.getResponse(),
      responseBody,
      Number(exception.getStatus),
    );
  }
}
