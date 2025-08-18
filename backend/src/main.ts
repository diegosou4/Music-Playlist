
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
      bodyParser: false, 
  });
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Music Api')
    .setDescription('This is a music API built with NestJS')
    .setVersion('1.0')
    .addTag('music')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
