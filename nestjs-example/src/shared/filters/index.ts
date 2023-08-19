import { CustomErrorFilter } from './custom-error.filter';
import { ForbiddenExceptionFilter } from './forbidden-error.filter';
import { GenericErrorFilter } from './generic-error.filter';
import { NotFoundErrorFilter } from './not-found-error.filter';
import { UnauthorizedExceptionErrorFilter } from './unauthorized-error-filter';
import { ValidationErrorFilter } from './validation-error.filter';

export const getFilters = (httpAdapterHost) => [
  new GenericErrorFilter(httpAdapterHost),
  new ValidationErrorFilter(httpAdapterHost),
  new NotFoundErrorFilter(httpAdapterHost),
  new CustomErrorFilter(httpAdapterHost),
  new UnauthorizedExceptionErrorFilter(httpAdapterHost),
  new ForbiddenExceptionFilter(httpAdapterHost),
];
