import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // whitelist vai remover chaves que não estão no DTO
  // forbidNonWhitelisted vai retornar erro caso tenha chaves que não estão no DTO
  app.useGlobalPipes(
    // Pipe - Validação de dados
    // ParseIntoPipe - Consigo tentar converter tipos especificos em lugares especificos
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: false, // Tenta transformar os tipos de dados de params e dtos
      // Impacto na performance
    }),
  ); // class validator
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
