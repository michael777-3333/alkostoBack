import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  
  /**
   *hacer posibles las validacios del DTO
   */
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades no definidas en el DTO
    forbidNonWhitelisted: true, // Lanza una excepción si se envían propiedades no definidas
  })); 
  const PORT = process.env.PORT || 8080;
  await app.listen(3000);
}
bootstrap();
