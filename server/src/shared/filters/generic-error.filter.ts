import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { IErrorResponse } from '../structure/app.structure';

@Catch()
export class GenericErrorFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    console.log(new Date().toISOString(), exception);

    const responseBody = {
      error: {
        status: true,
        messages: ['An internal error has occurred, please try again later.'],
        code: 'internal.error',
      },
    } as IErrorResponse;

    httpAdapter.reply(
      ctx.getResponse(),
      responseBody,
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
