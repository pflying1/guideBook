// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // 정적 파일 폴더 경로 설정
  app.use(express.static(join(__dirname, 'public')));

  // CORS 설정
  app.enableCors();

  await app.listen(8080);
}
bootstrap().catch((err) => {
  console.error(err);
});
