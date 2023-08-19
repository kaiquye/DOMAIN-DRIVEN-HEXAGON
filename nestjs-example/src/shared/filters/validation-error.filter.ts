import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { IErrorResponse } from '../structure/app.structure';

@Catch(BadRequestException)
export class ValidationErrorFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: BadRequestException, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const defaultResponse = exception.getResponse() as BadRequestException;

    const responseBody = {
      error: {
        status: true,
        messages: Array.isArray(defaultResponse.message)
          ? defaultResponse.message
          : [defaultResponse.message],
        code: 'validation.error',
      },
    } as IErrorResponse;

    httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
  }
}
