import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import * as path from 'path';
import serveStatic from 'serve-static';
import { type Request, type Response, type NextFunction } from 'express';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // 정적 파일 폴더 경로 설정
  app.use(express.static(path.join(__dirname, 'dist')));

  // 정적 파일 폴더 경로 설정 (예: 이미지가 저장된 폴더)
  app.use('/asset', express.static(join(__dirname, 'src', 'asset')));

  // 특정 경로(예: /senbakurono)에 대한 요청을 제외한 모든 요청을 index.html로 리다이렉트
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith('/api')) {
      next();
    } else {
      res.sendFile(join(__dirname, 'dist', 'index.html'));
    }
  });

  // CORS 설정
  app.enableCors();

  await app.listen(8080);
}
bootstrap().catch((err) => {
  console.error(err);
});
