import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  UnauthorizedException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { IErrorResponse } from '../structure/app.structure';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionErrorFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: UnauthorizedException, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const responseBody = {
      error: {
        status: true,
        messages: ['You do not have permission to access this resource.'],
        code: 'resource.unauthorized',
      },
    } as IErrorResponse;

    httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
  }
}
