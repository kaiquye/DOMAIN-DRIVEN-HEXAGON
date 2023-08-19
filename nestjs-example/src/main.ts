import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './infra/app.module';
import { PrismaService } from './infra/postgres/prisma.service';
import { getFilters } from './shared/filters';
import { ResponseInterceptor } from './shared/interceptors/response.interceptor';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const prismaService = app.get(PrismaService);
  app.useLogger(app.get(Logger));
  app.enableCors();
  await prismaService.enableShutdownHooks(app);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(...getFilters(httpAdapterHost));
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(process.env.PORT, () => console.log('start...'));
}
bootstrap();
